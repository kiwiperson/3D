(function(){require.config({baseUrl:"/javascripts",waitSeconds:30,shim:{underscore:{exports:"_"},bootstrap:{deps:["jquery"]},noty:{deps:["jquery"]},"noty-top":{deps:["noty"]},"noty-topCenter":{deps:["noty"]},"noty-default":{deps:["noty"]}},paths:{bootstrap:"bootstrap",jquery:"jquery-1.10.2.min","bootstrap-switch":"bootstrap-switch",rails:"rails",masonry:"masonry.pkgd.min",underscore:"underscore-min",noty:"noty/jquery.noty","noty-top":"noty/layouts/top","noty-topCenter":"noty/layouts/topCenter","noty-default":"noty/themes/default"}}),require(["jquery","underscore","bootstrap","noty","noty-top","noty-topCenter","noty-default","bootstrap-switch"],function(e,t){return e('a[name="delete-link"]').click(function(){var t;return t=e(this).attr("data-id"),e("#post-id").val(t)}),e("#confirm-delete-btn").click(function(){var t;return t=e('meta[name="csrf-token"]').attr("content"),e("#authenticity_token").val(t),e("#delete-post-form").submit()}),e(".make-switch").on("switch-change",function(t,n){var r,i,s,o;return s=e(this).bootstrapSwitch("status"),o=e('meta[name="csrf-token"]').attr("content"),i=e(this).attr("data-id"),console.log("published: "+s),r={authenticity_token:o,id:i,published:s},e.ajax({type:"POST",url:"/posts/published",data:r,dataType:"json",success:function(){}})})})}).call(this);