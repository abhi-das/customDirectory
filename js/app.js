"use strict";

var app = angular.module("CardsApp", ["ngTable","ngRoute","ngResource","ngAnimate","AppCtrls","AppServices","AppDrvs"]);

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
		.when("/book-info",{
			templateUrl: "partials/bookinfo.html",
			controller: "BookInfoCtrl"
		})
		.when("/grid-table",{
			templateUrl: "partials/gridtable.html",
			controller: "GridTableCtrl"
		})
		.when("/grp-shorting",{
			templateUrl: "partials/ngTable-grp-shorting.html",
			controller: "GrpShortCtrl"
		})
		.otherwise({
			redirectTo: "/grp-shorting"
		})

	}
]);

