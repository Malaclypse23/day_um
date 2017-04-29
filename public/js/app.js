var lang;
var isStopped = false;

function getCurrentImage() {
	var highestOpacity = 0;
	$('.fade div:not(.caption)').each(function() {
		var image = $(this).css('background-image');
		var opacity = $(this).css('opacity');
		if (opacity > highestOpacity) {
			highestOpacity = opacity;
			$(this).addClass("show-image");
		}
		$(this).attr('background-image', image);
		$(this).addClass("stop-ani");
	});
}

function select_language(language, isChange) {
	$("[lang]").each(function () {
        if ($(this).attr("lang") == language)
            $(this).show();
        else
            $(this).hide();
    });

    if (language == 'de' && isChange) {
		$('header select option[value="de"]').attr("selected", "selected");
		$.cookie("lang", language);
		lang = "de";
	} else if (language == 'en' && isChange) {
		$('header select option[value="en"]').attr("selected", "selected");
		$.cookie("lang", language);
		lang = "en";
	}
}

$(function() {
	var pathname = window.location.pathname; // Returns path only
	var url      = window.location.href;     // Returns full URL

	var isDe = window.location.href.indexOf("lang=de") > -1;

	lang = $.cookie('lang');
	
	if (lang == 'de' || isDe == true) {
		$('header select option[value="de"]').attr('selected', 'selected');
		lang = 'de';
	} else {
		lang = 'en';
	} 

	select_language(lang, false);

	$('#lang').on('change', function(e) {
		e.preventDefault();
		select_language($(this).val(), true);
	});

	$('.social-media-icons li:last-of-type').on('click', function(e) {
		e.preventDefault();
		$('.fa-plus').toggleClass('fa-minus');
		$('.main-menu ul').delay(80).fadeToggle();
	});

    $('.fa-forward').on('click', function() {
		if (!isStopped) getCurrentImage();
		isStopped = true;
		var $next = $('.show-image').next();
		$('.fade div').removeClass("show-image");
		if (!$next.length && !$next.hasClass('caption')) {
			$('.fade > div:first-of-type').addClass("show-image");
		} else if (!$next.hasClass('caption')) {
			$next.addClass("show-image");
		} else {
			$('.fade > div:first-of-type').addClass("show-image");
		}
    });

    $('.fa-backward').on('click', function () {
		if (!isStopped) getCurrentImage();
		isStopped = true;
		var $prev = $('.show-image').prev();
		$('.fade div').removeClass("show-image");
		if (!$prev.length && !$prev.hasClass('caption')) {
			$('.fade > div:last-of-type').addClass("show-image");
		} else if (!$prev.hasClass('caption')) {
			$prev.addClass("show-image");
		} else {
			$('.fade > div:last-of-type').addClass("show-image");
		}
    });
});
