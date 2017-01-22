'use strict';

angular.module('ShopApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
	      .when('/shop.html', {
	        	templateUrl: '/shop.html',
	        	controller: 'ProductController'
	      })
	      .otherwise({
	    		redirectTo: "/shop.html"
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
			$scope.cart = [{ name: 'Red Hand 1 Print', price: '9 EUR', quantity: 2, total: '18 EUR' }];
	});
	/*
	.controller('AddController', function AddController($scope, $window) {
		add-to-cart() {
			console.log(added!);
		}
	});
*/


/*
var DayumApp = angular.module('DayumApp', ['ngRoute'])
	.config(function ($routeProvider) {
  		$routeProvider
  		.when("/", {
    		templateUrl: "index.html"
  		})
  		.when("/shop", {
    		templateUrl: "../shop.html",
    		controller: 'ProductController'
  		})
  		.otherwise({
    		redirectTo: "/"
  		});
});

DayumApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      	.when('/', {
      		templateUrl: '../cart.html',
      		controller: 'CartController'
	  	})
	  	.when('/products/:productId', {
		    templateUrl: 'product.html',
	    	controller: 'ProductController'
	  	});
}]);
*/

/*
DayumApp.controller('CartController', function ($rootScope, appState) {
	alert('cart!');
  $scope.cart = [ { name: 'Red Hand 1 Print', price: '9 EUR', quantity: 2, total: '18 EUR' }];
});

DayumApp.controller('ProductController', function ($scope, appState) {
  $scope.products = [
	    { name: 'Red Hand 1', type: "Print", price: '9 EUR', quantity: 1, filename: "img/big/redhand1.jpg" },
			{ name: 'Red Hand 2', type: "Print", price: '9 EUR', quantity: 1, filename: "img/big/redhand2.jpg" },
			{ name: 'Red Hand 3', type: "Print", price: '9 EUR', quantity: 1, filename: "img/big/redhand3.jpg" },
	    { name: 'Birds 1', type: "T-Shirt", price: '19 EUR', quantity: 1, filename: "img/big/birds1.jpg", size: ['M', 'L', 'XL'] },
			{ name: 'Birds 3', type: "T-Shirt", price: '19 EUR', quantity: 1, filename: "img/big/birds3.jpg", size: ['M', 'L', 'XL'] }
  ];
});
*/