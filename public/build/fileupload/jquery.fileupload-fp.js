/*
 * jQuery File Upload File Processing Plugin 1.2.3
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function(e){typeof define=="function"&&define.amd?define(["jquery","load-image","canvas-to-blob","./jquery.fileupload"],e):e(window.jQuery,window.loadImage)})(function(e,t){e.widget("blueimp.fileupload",e.blueimp.fileupload,{options:{process:[],add:function(t,n){(n.autoUpload||n.autoUpload!==!1&&(e(this).data("blueimp-fileupload")||e(this).data("fileupload")).options.autoUpload)&&e(this).fileupload("process",n).done(function(){n.submit()})}},processActions:{load:function(n,r){var i=this,s=n.files[n.index],o=e.Deferred();return window.HTMLCanvasElement&&window.HTMLCanvasElement.prototype.toBlob&&(e.type(r.maxFileSize)!=="number"||s.size<r.maxFileSize)&&(!r.fileTypes||r.fileTypes.test(s.type))?t(s,function(e){if(!e.src)return o.rejectWith(i,[n]);n.img=e,o.resolveWith(i,[n])}):o.rejectWith(i,[n]),o.promise()},resize:function(n,r){var i=n.img,s;r=e.extend({canvas:!0},r);if(i){s=t.scale(i,r);if(s.width!==i.width||s.height!==i.height)n.canvas=s}return n},save:function(t,n){if(!t.canvas)return t;var r=this,i=t.files[t.index],s=i.name,o=e.Deferred(),u=function(e){e.name||(i.type===e.type?e.name=i.name:i.name&&(e.name=i.name.replace(/\..+$/,"."+e.type.substr(6)))),t.files[t.index]=e,o.resolveWith(r,[t])};return t.canvas.mozGetAsFile?u(t.canvas.mozGetAsFile(/^image\/(jpeg|png)$/.test(i.type)&&s||(s&&s.replace(/\..+$/,"")||"blob")+".png",i.type)):t.canvas.toBlob(u,i.type),o.promise()}},_processFile:function(t,n,r){var i=this,s=e.Deferred().resolveWith(i,[{files:t,index:n}]),o=s.promise();return i._processing+=1,e.each(r.process,function(e,t){o=o.pipe(function(e){return i.processActions[t.action].call(this,e,t)})}),o.always(function(){i._processing-=1,i._processing===0&&i.element.removeClass("fileupload-processing")}),i._processing===1&&i.element.addClass("fileupload-processing"),o},process:function(t){var n=this,r=e.extend({},this.options,t);return r.process&&r.process.length&&this._isXHRUpload(r)&&e.each(t.files,function(i,s){n._processingQueue=n._processingQueue.pipe(function(){var s=e.Deferred();return n._processFile(t.files,i,r).always(function(){s.resolveWith(n)}),s.promise()})}),this._processingQueue},_create:function(){this._super(),this._processing=0,this._processingQueue=e.Deferred().resolveWith(this).promise()}})});