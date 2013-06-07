load('application');

before(logoLayout, {
    only: ['enter', 'login','signup']
});

/**
 * enter into user login page
 */
action('enter',function enter() {
    this.title = '用户登录';
    this.user = new User;
    render('login');
});

/**
 *  do user login action
 */
action(function login() {
    var user = req.body.User;
    User.findOne({'name': user.name,'password':user.password}, function(err, user){

        if (err) {
            if (!err && params.format === 'json') {
                return send({code: 404, error: 'Not found'});
            }
            flash('info', 'Sorry,系统发生错误，请稍后在试。');
            flash('user', user);
            redirect(path_to.enter);
        }else if(!user){
            flash('info', '用户名或密码错误！');
            flash('user', user);
            redirect(path_to.enter);
        } else {
            flash('info', '已成功登陆！');
            req.session.user = user;
            redirect(path_to.root);
        }
    });

});
/**
 *  enter into user reg
 */
action(function signup() {
    this.title = '用户注册';
    this.user = new User;
    render();
});

/**
 *  enter into user reg
 */
action(function reg() {

    var newUser = new User({
        name: req.body.User.name,
        email: req.body.User.email,
        password: req.body.User.password
    });
    User.findOne({'name': newUser.name}, function(err, user){
        if (err) {
            flash('error', '系统发生异常！');
            render('signup', {
                user: user,
                title: '用户注册'
            });
        }
        if(user){
            flash('error', '用户名已经存在，请更换其它用户名！');
            flash('user', newUser);
            redirect(path_to.signup);
        }else{
            newUser.save(function (err, user) {
                respondTo(function (format) {
                    format.json(function () {
                        if (err) {
                            send({code: 500, error: user && user.errors || err});
                        } else {
                            send({code: 200, data: user.toObject()});
                        }
                    });
                    format.html(function () {
                        if (err) {
                            flash('error', 'user can not be created');
                            render('signup', {
                                user: user,
                                title: '用户注册'
                            });
                        } else {
                            flash('info', 'user created');
                            req.session.user = user;
                            redirect(path_to.root);
                        }
                    });
                });
            });
        }

    });
});

/**
 * user logout action
 */
action(function logout(){
    if(req.session.user){
        req.session.user = null;
    }
    flash('info', '注销成功！');
    redirect(path_to.root);
})
/**
 * load user
 * param _id
 */
function logoLayout() {
    layout('logo');
    next();
}