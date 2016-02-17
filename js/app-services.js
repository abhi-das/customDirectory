"use strict";

var appSrv = angular.module("AppServices",[]);

appSrv.factory("CardServices",["$resource", function($resource){

	return $resource("data/phones/:cardId.json",
	{
		stripTrailSlashes: false
		// callback: "JSON_CALLBACK"
	},
	{
		getTheCardList:{
			method: "GET",
			//method: "JSONP",
			params:{
				delay: 20000,
				cardId: "phones"
			},
			isArray: true
		}
	})

}]);