(function(e){e.noty.layouts.centerLeft={name:"centerLeft",options:{},container:{object:'<ul id="noty_centerLeft_layout_container" />',selector:"ul#noty_centerLeft_layout_container",style:function(){e(this).css({left:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7});var t=e(this).clone().css({visibility:"hidden",display:"block",position:"absolute",top:0,left:0}).attr("id","dupe");e("body").append(t),t.find(".i-am-closing-now").remove(),t.find("li").css("display","block");var n=t.height();t.remove(),e(this).hasClass("i-am-new")?e(this).css({top:(e(window).height()-n)/2+"px"}):e(this).animate({top:(e(window).height()-n)/2+"px"},500),window.innerWidth<600&&e(this).css({left:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}})(jQuery);