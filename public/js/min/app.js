function getCurrentImage(){var e=0;$(".fade div").each(function(){var a=$(this).css("background-image"),s=$(this).css("opacity");s>e&&(e=s,$(this).addClass("show-image")),$(this).attr("background-image",a),$(this).addClass("stop-ani")})}function validateEmail(e){var a=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return a.test(e)}function select_language(e,a){$("[lang]").each(function(){$(this).attr("lang")==e?$(this).show():$(this).hide()}),"de"==e&&a?($('header select option[value="de"]').attr("selected","selected"),$.cookie("lang",e),lang="de"):"en"==e&&a&&($('header select option[value="en"]').attr("selected","selected"),$.cookie("lang",e),lang="en")}var lang,isStopped=!1,entries=[];$(function(){lang=$.cookie("lang"),void 0==lang?lang="en":"de"==lang&&$('header select option[value="de"]').attr("selected","selected"),select_language(lang,!1),$(".main-menu").addClass("show-menu"),$(".social-media-icons li:last-of-type").on("click",function(){$(".fa-plus").toggleClass("fa-minus"),$(".main-menu ul").delay(80).fadeToggle()}),$("#reply").change(function(){$(this).prop("checked")?$("#email-input").prop("disabled",!1):$("#email-input").prop("disabled",!0)}),$("#submit").on("click",function(e){e.preventDefault();var a={purpose:$("#purpose").val(),message:$("#message").val(),reply:$("#reply").val(),email:$("#email-input").val()};entries.push(a),console.log(a),console.log(entries),alert("danke!")}),$("#email-input, #message").change(function(){var e=$("#reply").prop("checked");$("#message").val().length>2&&(!e||e&&validateEmail($("#email-input").val()))?$("#submit").prop("disabled",!1):$("#submit").prop("disabled",!0)}),$(".fa-forward").on("click",function(){isStopped||getCurrentImage(),isStopped=!0;var e=$(".show-image").next();$(".fade div").removeClass("show-image"),e.length?e.addClass("show-image"):$(".fade > div:first-of-type").addClass("show-image")}),$(".fa-backward").on("click",function(){isStopped||getCurrentImage();var e=$(".show-image").prev();$(".fade div").removeClass("show-image"),e.length?e.addClass("show-image"):$(".fade > div:last-of-type").addClass("show-image")})});