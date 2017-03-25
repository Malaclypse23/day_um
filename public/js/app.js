var lang;

function getCurrentImage() {
	var highestOpacity = 0;
	$('.fade div').each(function() {
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
		$.cookie("lang", 'de');
		lang = "de";
	} else if (language == 'en' && isChange) {
		$('header select option[value="en"]').attr("selected", "selected");
		$.cookie("lang", 'en');
		lang = "en";
	}
}

$(function() {
	$(".social-media-icons li:last-of-type").on('click', function () {
		$('.main-menu ul').toggle();
	});

    $(".fa-forward").on('click', function () {
		getCurrentImage();
		var $next = $('.show-image').next();
		$('.fade div').removeClass("show-image");
		if (!$next.length) {
			$('.fade > div:first-of-type').addClass("show-image");
		} else {
			$next.addClass("show-image");	
		}
    });

    $(".fa-backward").on('click', function () {
		getCurrentImage();
		var $prev = $('.show-image').prev();
		$('.fade div').removeClass("show-image");
		if (!$prev.length) {
			$('.fade > div:last-of-type').addClass("show-image");
		} else {
			$prev.addClass("show-image");	
		}
    });

	lang = $.cookie("lang");
	if (lang == undefined) {
		lang = 'en';
	} else if (lang == 'de') {
		$('header select option[value="de"]').attr("selected", "selected");
	}
	
	select_language(lang, false);
	/*
	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
		'alwaysShowNavOnTouchDevices': true,
		'albumLabel':	"Image %1 of %2",
	});
	
	
	var cart = { item: "Product 1", price: 19.00, qty: 2 };
	'cart':  JSON.stringify(cart)
	$.cookie("settings", JSON.stringify(settings));
	*/
});
