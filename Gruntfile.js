// Generated by CoffeeScript 1.6.3
(function() {
  module.exports = function(grunt) {
    var cssFiles, delOptions;
    cssFiles = ['public/stylesheets/bootstrap.css', 'public/stylesheets/bootstrap-responsive.css', 'public/stylesheets/bootstrap-icons.css', 'public/stylesheets/font-awesome.min.css', 'public/stylesheets/font-awesome.ie7.min.css', 'public/stylesheets/jquery.fileupload-ui.css', 'public/stylesheets/jquery.toolbars.css', 'public/stylesheets/show.css', 'public/stylesheets/application.css'];
    delOptions = {
      force: true
    };
    grunt.initConfig({
      pkg: [grunt.file.readJSON('package.json')],
      concat: {
        css: {
          src: cssFiles,
          dest: 'public/stylesheets/application-all.css'
        }
      },
      cssmin: {
        css: {
          src: 'public/stylesheets/application-all.css',
          dest: 'public/stylesheets/application-all-min.css'
        }
      },
      watch: {
        scripts: {
          files: cssFiles,
          tasks: ['concat', 'cssmin'],
          options: {
            nospawn: true
          }
        }
      },
      requirejs: {
        compile: {
          options: {
            mainConfigFile: 'public/javascripts/app/requirejs-config.js',
            done: function(done, output) {
              return done;
            },
            baseUrl: "public/javascripts",
            dir: 'public/build',
            fileExclusionRegExp: /.coffee$/,
            modules: [
              {
                name: 'app/embeded'
              }, {
                name: 'app/home'
              }, {
                name: 'app/post'
              }, {
                name: 'app/post-index'
              }, {
                name: 'app/show'
              }, {
                name: 'app/tip-info'
              }
            ]
          }
        }
      },
      clean: {
        src: ['public/build'],
        filter: function(filepath) {
          console.log(filepath);
          if (grunt.file.exists(filepath) && !grunt.file.isDir(filepath)) {
            return grunt.file["delete"](filepath, delOptions);
          }
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('css', ['concat', 'cssmin']);
    return grunt.registerTask('default', ['concat', 'cssmin', 'requirejs', 'clean']);
  };

}).call(this);
