"use strict";

var app = angular.module("CardsApp", ["ngRoute","ngResource","ngAnimate","AppCtrls","AppServices","AppDrvs"]);

app.config(["$routeProvider", 
	function($rProvider){
		$rProvider
		.when("/cards",{
			templateUrl: "partials/cardslist.html",
			controller: "CardsList"
		})
		.when("/card-details/:cardId",{
			templateUrl: "partials/cardinfo.html",
			controller: "CardDetail"
		})
		.when("/user-form",{
			templateUrl: "partials/checkoutstep1.html",
			controller: "CheckoutForm"
		})
		.otherwise({
			redirectTo: "/cards"
		})

	}
]);

