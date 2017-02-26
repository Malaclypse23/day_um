function select_language(language) {
	$("[lang]").each(function () {
        if ($(this).attr("lang") == language)
            $(this).show();
        else
            $(this).hide();
    });
}


$(function() {

	// disable right-click SAVE AS!
	//document.addEventListener('contextmenu', event => event.preventDefault());

	var settings = $.cookie("settings");
	if (settings == null) {
		settings = { 'lang': 'en', 'debug': false };
	}

	var lang = $('header select option:selected').text(); // TODO

	select_language('en');

	$.cookie("settings", JSON.stringify(settings));

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
