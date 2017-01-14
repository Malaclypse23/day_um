$(function() {
	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
		'alwaysShowNavOnTouchDevices': true,
		'albumLabel':	"Image %1 of %2",
	});
});


angular.module('ShopApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/shop.html', {
        templateUrl: '/shop.html',
        controller: 'ProductController'
      });
	}])
	.controller('ProductController', function ProductController($scope, $window) {
	  $scope.products = [
	    { name: 'Red Hand 1', type: "Print", price: '9 EUR', quantity: 1, filename: "img/big/redhand1.jpg" },
			{ name: 'Red Hand 2', type: "Print", price: '9 EUR', quantity: 1, filename: "img/big/redhand2.jpg" },
			{ name: 'Red Hand 3', type: "Print", price: '9 EUR', quantity: 1, filename: "img/big/redhand3.jpg" },
	    { name: 'Birds 1', type: "T-Shirt", price: '19 EUR', quantity: 1, filename: "img/big/birds1.jpg", size: ['M', 'L', 'XL'] },
			{ name: 'Birds 3', type: "T-Shirt", price: '19 EUR', quantity: 1, filename: "img/big/birds3.jpg", size: ['M', 'L', 'XL'] }
	  ];
	})
	.controller('CartController', function CartController($scope, $window) {
		$scope.cart = [
	    { name: 'Red Hand 1 Print', price: '9 EUR', quantity: 2, total: '18 EUR' }
	  ];
	});
	/*
	.controller('AddController', function AddController($scope, $window) {
		add-to-cart() {
			console.log(added!);
		}

	});
*/

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
});
