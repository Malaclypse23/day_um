var lang;
var isStopped = false;

// Callback function references the event target and adds the 'swipeleft' class to it
function swipeleftHandler(event){
 	$(event.target).addClass("swipeleft");
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
}

function swiperightHandler(event) {
	$(event.target).addClass("swiperight");
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
}

function prevPage(event) {
	event.preventDefault();
	$("input[name='slider']:selected").prev().prop("selected", "selected");
}

function nextPage(event) {
	event.preventDefault();
	$("input[name='slider']:selected").next().prop("selected", "selected");
}

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
	var isDe = window.location.href.indexOf("lang=de") > -1;

	lang = $.cookie('lang');
	
	if (lang == 'de' || isDe == true) {
		$('header select option[value="de"]').attr('selected', 'selected');
		lang = 'de';
	} else {
		lang = 'en';
	} 

	select_language(lang, false);

	$(".fade > div").on("swipeleft", swipeleftHandler);
 	$(".fade > div").on("swiperight", swiperightHandler);
 	$(".fade > div").on("click", getCurrentImage);

 	$(".sliderElements").on("swipeleft", nextPage);
 	$(".sliderElements").on("swiperight", prevPage);

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
