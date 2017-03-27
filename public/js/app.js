var lang;
var isStopped = false;

var former = console.log;

console.log = function(msg) {
	former(msg);
	//$('#log').append("<div>" + msg + "</div>");
}

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

function validateEmail(input) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(input);
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
	lang = $.cookie('lang');
	if (lang == undefined) {
		lang = 'en';
	} else if (lang == 'de') {
		$('header select option[value="de"]').attr('selected', 'selected');
	}

	select_language(lang, false);
	$('.main-menu').addClass('show-menu');

	$('.social-media-icons li:last-of-type').on('click', function() {
		$('.fa-plus').toggleClass('fa-minus');
		$('.main-menu ul').delay(80).fadeToggle();
		//$('.main-menu ul').fadeToggle();
	});

	$('#reply').change(function() {
    	if ($(this).prop('checked')) {
    		$('#email-input').prop('disabled', false);
    	} else {
    		$('#email-input').prop('disabled', true);
    	}
	});

	$('#submit').on('click', function(e) {
		e.preventDefault();
		var entry = { "purpose": $('#purpose').val(),
					  "message": $('#message').val(),
					  "email": $('#email-input').val()
					};
		console.log(JSON.stringify(entry));
		//location.reload();
	});

	$('#email-input, #message').change(function() {
		var needEmail = $('#reply').prop('checked');
    	if ($('#message').val().length > 2 && (!needEmail || (needEmail && validateEmail($('#email-input').val())))) {
    		$('#submit').prop('disabled', false);
    	} else {
    		$('#submit').prop('disabled', true);
    	}
	});

    $('.fa-forward').on('click', function() {
		if (!isStopped) getCurrentImage();
		isStopped = true;
		var $next = $('.show-image').next();
		$('.fade div').removeClass("show-image");
		if (!$next.length) {
			$('.fade > div:first-of-type').addClass("show-image");
		} else {
			$next.addClass("show-image");
		}
    });

    $('.fa-backward').on('click', function () {
		if (!isStopped) getCurrentImage();
		var $prev = $('.show-image').prev();
		$('.fade div').removeClass("show-image");
		if (!$prev.length) {
			$('.fade > div:last-of-type').addClass("show-image");
		} else {
			$prev.addClass("show-image");
		}
    });

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
