"use strict";

var app = angular.module("CardsApp", ["ngTable","ui.router", "uiRouterStyles", "ngResource","ngAnimate","AppCtrls","AppServices","AppDrvs"]);

app.config(["$stateProvider", "$urlRouterProvider", 
	function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('gridTable');

		$stateProvider
		.state('cards', {
			url: '/cards',
			templateUrl: "partials/cardslist.html",
			controller: "CardsList",
			data: {
	          css: 'stylesheets/cards.css'
	        }
		})
		.state("gridTable",{
			url: "/gridTable",
			templateUrl: "partials/gridtable.html",
			controller: "GridTableCtrl"
		})
		.state('userForm',{
			url: "/userForm",
			templateUrl: "partials/checkoutstep1.html",
			controller: "CheckoutForm"
		})
		.state("bookInfo",{
			url: "/bookInfo",
			templateUrl: "partials/bookinfo.html",
			controller: "BookInfoCtrl"
		})
		.state("grpShorting",{
			url: "/grpShorting",
			templateUrl: "partials/ngTable-grp-shorting.html",
			controller: "GrpShortCtrl"
		})
		.state("card-details/:cardId",{
			url: "/card-details/:cardId",
			templateUrl: "partials/cardinfo.html",
			controller: "CardDetail"
		})

	}
])

/*
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
]);*/

