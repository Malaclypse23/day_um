function clearLocalStorage() {
	//if (localStorage) {
		var s = { 'lang': 'en', 'debug': false };
		localStorage.setItem('settings',  JSON.stringify(s));		
	//}
}



$(function() {


	var settings = null;
	if (localStorage) {
		try { 
			settings = JSON.parse(localStorage.getItem('settings'));
		}
		catch(e) {
    		if (e.name == "NS_ERROR_FILE_CORRUPTED") settings = { 'lang': 'en', 'debug': false };
    	}
    }
	
	if (settings == null) {
		var cart = {
			item: "Product 1",
			price: 19.00,
			qty: 2
		};

		settings = { 'lang': 'en', 'debug': false, 'cart':  JSON.stringify(cart)}; 
	}

	localStorage.setItem('settings', JSON.stringify(settings));	


	$.Shop = function( element ) {
		this.$element = $(element); // top-level element
		this.init();
	};

	$.Shop.prototype = {
		init: function() {
			// initializes properties and methods
			this.cartPrefix = "winery-"; // prefix string to be prepended to the cart's name in session storage
			this.cartName = this.cartPrefix + "cart"; // cart's name in session storage
			this.shippingRates = this.cartPrefix + "shipping-rates"; // shipping rates key in session storage
			this.total = this.cartPrefix + "total"; // total key in the session storage
			this.storage = sessionStorage; // shortcut to sessionStorage object


			this.$formAddToCart = this.$element.find( "form.add-to-cart" ); // forms for adding items to the cart
			this.$formCart = this.$element.find( "#shopping-cart" ); // Shopping cart form
			this.$checkoutCart = this.$element.find( "#checkout-cart" ); // checkout form cart
			this.$checkoutOrderForm = this.$element.find( "#checkout-order-form" ); // checkout user details form
			this.$shipping = this.$element.find( "#sshipping" ); // element that displays the shipping rates
			this.$subTotal = this.$element.find( "#stotal" ); // element that displays the subtotal charges
			this.$shoppingCartActions = this.$element.find( "#shopping-cart-actions" ); // cart actions links
			this.$updateCartBtn = this.$shoppingCartActions.find( "#update-cart" ); // update cart button
			this.$emptyCartBtn = this.$shoppingCartActions.find( "#empty-cart" ); // empty cart button
			this.$userDetails = this.$element.find( "#user-details-content" ); // element that displays the user's information
			this.$paypalForm = this.$element.find( "#paypal-form" ); // PayPal form


			this.currency = "&euro;"; // HTML entity of the currency to be displayed in layout
			this.currencyString = "€"; // currency symbol as text string
			this.paypalCurrency = "EUR"; // PayPal's currency code
			this.paypalBusinessEmail = "yourbusiness@email.com"; // your PayPal Business account email address
			this.paypalURL = "https://www.sandbox.paypal.com/cgi-bin/webscr"; // URL of the PayPal form

			// object containing patterns for form validation
			this.requiredFields = {
				expression: {
					//value: /^([w-.]+)@((?:[w]+.)+)([a-z]){2,4}$/
				},

				str: {
					value: ""
				}

			};
		}
	};

	$(function() {
		var shop = new $.Shop( "#root" ); // object's instance
	});

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
		var settings;
		try { 
			settings = JSON.parse(localStorage.getItem('settings'));
		} catch(e) {
    		if (e.name == "NS_ERROR_FILE_CORRUPTED") {
    			settings = { 'lang': 'en', 'debug': false };
    		}
    	}
    	
		if (localStorage) {
			if (settings.lang == "en") {
				var s = { 'lang': 'de', 'debug': true };	
				localStorage.setItem('settings',  JSON.stringify(s));
			} else { 
				var s = { 'lang': 'en', 'debug': true };	
				localStorage.setItem('settings', JSON.stringify(s));	
			}
			location.reload();	
		}
	});

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices': true,
      'albumLabel':	"Image %1 of %2",
    });

});
