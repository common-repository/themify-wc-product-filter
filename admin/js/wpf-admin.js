function wpf_import(i){"use strict";var e=i.attr("id").replace("plupload-upload-ui",""),t=[],a=i.closest("form"),o=a.find(".wpf_error");(t=a.data("plupload")).browse_button=e,t.container=i.closest("form").attr("id"),t.file_data_name=i.data("name")?i.data("name"):t.file_data_name,t.multipart_params={nonce:"",action:""},i.data("formats")&&(t.filters=i.data("formats"));var n=new plupload.Uploader(t);n.init(),n.bind("FilesAdded",((i,e)=>{n.settings.multipart_params.action=a.find('input[name="action"]').val(),n.settings.multipart_params.nonce=a.find('input[name="nonce"]').val(),i.refresh(),i.start(),a.addClass("wpf_save")})),n.bind("Error",((i,e)=>{a.removeClass("wpf_save"),e.message&&o.text(e.message)})),n.bind("FileUploaded",((i,e,t)=>{if(t){var n=JSON.parse(t.response);n.error?(a.removeClass("wpf_save"),o.text(n.error)):n.success&&(setTimeout((()=>{a.removeClass("wpf_save")}),1500),window.location.reload())}else a.removeClass("wpf_save")}))}!function($,i){"use strict";window.addEventListener("load",(function(){$("body").on("click","a.wpf_lightbox",(function(i){i.preventDefault(),i.stopPropagation();var e=$(this);$.ajax({url:this,success(t){t&&a(i,e.attr("title"),t,e.data("class"),e.data("top"))}})})).on("click",".wpf_delete",(function(e){if(confirm(i.template_delete)){var t=$(this),a=t.closest("table");$.ajax({url:this,dataType:"json",beforeSend(){a.addClass("wpf_save")},complete(){a.removeClass("wpf_save")},success(i){i&&"1"==i.status&&t.closest("tr").remove()}})}e.preventDefault()})).on("click",".open_media_uploader_image",(function(i){var e=$(this).closest(".wpf_background_image"),t=wp.media({frame:"post",state:"insert",multiple:!1});t.open(),t.on("insert",(()=>{var i=t.state().get("selection").first().toJSON();e.find("input").val(i.url),e.find("img").attr("src",i.url),e.addClass("has-image")})),i.preventDefault()})).on("click",".remove-background",(function(i){var e=$(this).closest(".wpf_background_image");1==confirm("Remove background image?")&&(e.find("input").val(""),e.find("img").attr("src",""),e.removeClass("has-image")),i.preventDefault()}))}),{once:!0,passive:!0});var e=()=>{var i=document;return Math.max(Math.max(i.body.scrollHeight,i.documentElement.scrollHeight),Math.max(i.body.offsetHeight,i.documentElement.offsetHeight),Math.max(i.body.clientHeight,i.documentElement.clientHeight))},t=i=>{27===i.keyCode&&(i.preventDefault(),o(i))},a=(i,a,n,p,s)=>{i.preventDefault(),$(document).on("keyup",t);var r="wpf_"+Math.random().toString(36).substr(2,9),c='<div id="'+r+'" class="wpf_admin_lightbox wpf_interface"><div class="wpf_lightbox_title">'+a+'</div><a href="#" class="wpf_close_lightbox">×</a><div id="wpf_lightbox_container"><div class="wpf_lightbox_inner">'+n+'</div></div></div><div class="wpf_overlay"></div>';$("body").append(c),s||(s=100),p&&$("#"+r).addClass(p),$.event.trigger("WPF.openlightbox",[i,r]),$("#"+r).nextAll(".wpf_overlay").show(),$("#"+r).show().css("top",e()).animate({top:s},800),$("#"+r).find(".wpf_close_lightbox").on("click",o);let l=$("#wpf-import-btn");l.length&&wpf_import(l)},o=function(i){i.preventDefault(),$(document).off("keyup",t);var a=$(this).closest(".wpf_admin_lightbox");$.event.trigger("WPF.close_lightbox",this),a.animate({top:e()},800,(()=>{a.next(".wpf_overlay").remove(),a.remove()}))}}(jQuery,wpf_js);