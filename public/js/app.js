function select_language(language) {
	$("[lang]").each(function () {
        if ($(this).attr("lang") == language)
            $(this).show();
        else
            $(this).hide();
    });
}


$(function() {
	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
		'alwaysShowNavOnTouchDevices': true,
		'albumLabel':	"Image %1 of %2",
	});
	select_language('en');

	/*
	var cart = { item: "Product 1", price: 19.00, qty: 2 };
	var settings = $.cookie("settings");
	if (settings == null) {
		settings = { 'lang': 'en', 'debug': false, 'cart':  JSON.stringify(cart)};
	}

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
