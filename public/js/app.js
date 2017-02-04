$(function() {
	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
		'alwaysShowNavOnTouchDevices': true,
		'albumLabel':	"Image %1 of %2",
	});

	var cart = { item: "Product 1", price: 19.00, qty: 2 };
	var settings = $.cookie("settings");
	if (settings == null) {
		settings = { 'lang': 'en', 'debug': false, 'cart':  JSON.stringify(cart)};
	}

	$.cookie("settings", JSON.stringify(settings));

	if (settings.lang == 'en') {
		$('.deutsch').each(function() {
			$(this).hide();
		});
	} else if (settings.lang == 'de') {
		$('#language').text('en  |  [de]');
		$('.english').each(function() {
			$(this).hide();
		});
	}

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
});
