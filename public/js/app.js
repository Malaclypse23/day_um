var lang;

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
	lang = $.cookie("lang");
	if (lang == undefined) {
		lang = 'en';
	} else if (lang == 'de') {
		$('header select option[value="de"]').attr("selected", "selected");
	}
	
	select_language(lang, false);

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
});
