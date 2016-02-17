"use strict";

var appDrv = angular.module("AppDrvs",[]);

appDrv.directive("loginForm",[function(){

	var drv = {};
	drv = {
		restrict: "EAC",
		scope: {},
		templateUrl: "partials/directives/userlogin.html",
		controller: ["$scope", function($scope){
			// $scope.uName = "directive user name";
			//console.log($scope);
		}],
		link: function(scope,ele,attr){
			//console.log(scope);
		}
	};

	return drv;

}])

appDrv.directive("cardInfoSlide",[function(){

	var drv ={};
	drv = {
		restrict: "E",
		scope: {
			showdata: "="
		},
		templateUrl: "partials/directives/cardinfoslide.html",
		controller:["$scope", function($scope){
			// console.log($scope.showdata);
			$scope.showInfoDt = $scope.showdata;
		}],
		link: function(scope, ele, attr){
			// scope.showInfoDt = scope.showdata;
			scope.showInfoHandler = function($event){
				// var ht = (angular.element('card-body')[0].offsetHeight + angular.element('card-body')[0].offsetTop) * -1;
				// angular.element('card-body').css("top",ht+"px");
				var $currentTarget = $($event.currentTarget);
				// console.log($currentTarget.next('.card-body'));
				var cBody = $currentTarget.next('.card-body');
				var chead = $currentTarget;
				var ht = (cBody.height() + cBody.position().top - chead.outerHeight() )* -1;

				if( !cBody.hasClass('active') ){
					cBody.css("marginTop",ht).addClass('active');
				}else{
					cBody.css("marginTop",0 ).removeClass('active');
				}

				//angular.element(aa).toggleClass('active')
			}
		}
	}

	return drv;
}])