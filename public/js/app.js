var lang;

function select_language(language) {
	$("[lang]").each(function () {
        if ($(this).attr("lang") == language)
            $(this).show();
        else
            $(this).hide();
    });
    /*
    var settings = $.cookie("settings");
    if (language == 'en') {
		$('header select').val("de");
		settings = { 'lang': 'de', 'debug': false };
	} else {
		$('header select').val("en");
		settings = { 'lang': 'en', 'debug': false };
	}

    $.cookie("settings", JSON.stringify(settings));

    if (language == 'en') {
		$('header select').val("de");
		$.cookie("lang", 'de');
	} else {
		$('header select').val("en");
		$.cookie("lang", 'en');
	}
	*/
	//$('header select option[value=language]');

	if (language == 'en') {
		$.cookie("lang", 'de');
		$("header select option[value='de']");
	} else {
		$.cookie("lang", 'en');
		$("header select option[value='en']");
	}
}


$(function() {

	// disable right-click SAVE AS!
	//document.addEventListener('contextmenu', event => event.preventDefault());
	var lang = $.cookie("lang");
	if (lang == undefined || lang == null || lang == 'undefined') {
		lang = 'en';
	} else if (lang == 'de') {
		$("header select option[value='de']");	
	}
	
	//lang = $('header select option:selected').text(); // TODO
	select_language(lang);
	
	//$.cookie("settings", JSON.stringify(settings));
	//$.cookie("lang", lang);

	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
		'alwaysShowNavOnTouchDevices': true,
		'albumLabel':	"Image %1 of %2",
	});
	
	/*
	var cart = { item: "Product 1", price: 19.00, qty: 2 };
	'cart':  JSON.stringify(cart)

	$.cookie("settings", JSON.stringify(settings));
	*/

	/*
	$("#language").on('click', function() {
		if (settings.lang == "en") {
			var s = { 'lang': 'de', 'debug': true };
			$.cookie("settings", JSON.stringify(s));
		} else {
			var s = { 'lang': 'en', 'debug': true };
			$.cookie("settings", JSON.stringify(s));
		}
		location.reload();
	});
*/
});
