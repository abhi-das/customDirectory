"use strict";

var appCtrl = angular.module("AppCtrls",[]);

appCtrl.controller("CardsList", ["$scope", "$log","CardServices", "$resource", function($scope, $log, cardServ, $resource){

	// console.log("cards list init...");
	//console.log(cardServ);

	/*var dd = cardServ.getTheCardList(function(data){
		//console.log(data);
		$log.debug('Success: ', data);
	}, function(err){
		$log.debug('fail: ', err);
		//console.log("hello out");
	});*/


		/** * Using $promise service:*/
		//$log.debug( cardServ.query() );
		$scope.$emit("LOAD");

		var dd = cardServ.getTheCardList().$promise.then(function(data){
			//console.log(data);
			$log.debug('Success: ', data);
			$scope.$emit("UNLOAD");
			$scope.$emit("LOADCOMPLETED");

		}, function(err){
			$scope.$emit("UNLOAD");
			$scope.$emit("LOADFAIL");
			$log.debug('Failed: ',err);
		});

		//console.log(cardServ.getTheCardList())

		//Custom accordion 1 data
		$scope.slidedata1 = [
			{
				header: "Card Header 1",
				info: "Looking for guru help, I'm using angularJS in a repeating list in the code below. How would I get the the absoulute position or relative to the document of the top and left offset position for 'div and print it in the console? Is it it possible with AngularJs or do I need to use Jquery? Ultimately my goal is get the offset positions and use it to position a modal window, but if I could get help on the above I should be able to figure the rest out."
			},
			{
				header: "Card Header 2",
				info: "I'm handling the click events in the foo function in my directive, passing $event as a reference to the object that's been clicked, but I'm getting a reference to the img tag, rather than the li tag."
			},
			{
				header: "Card Header 3",
				info: "Not a direct answer to this question but rather to the issue of $event.currentTarget apparently be set to null. This is due to the fact that console.log shows deep mutable objects at the last state of execution, not at the state when console.log was called."
			}
		];

		//Custom accordion 2 data
		$scope.slidedata2 = [
			{
				header: "Info Header 1",
				info: "In this example the directive takes the object provided to the customer property and iterates through all of the properties in the object using ng-repeat. It then writes out the property values using <li> elements. "
			},
			{
				header: "Info Header 2",
				info: "Notice that with the = local scope property you don’t pass customer as with @. You instead pass the name of the property directly. In this example the customer object passed into the directive’s customer local scope property comes from the controller shown earlier. The directive iterates through all of the properties in the customer object using ng-repeat and writes them out. This yields the following output:"
			},
			{
				header: "Info Header 3",
				info: "At this point you’ve seen how to use local scope properties to pass values into a directive as strings (@) and how to bind to external objects using a two-way data binding technique (=). The final local scope property uses the & character and is used to bind to external functions."
			}
		];

}]);

appCtrl.controller("CardDetail",["$scope","$routeParams","CardServices", function($scope, $routeParams, cardServ){

	var newPhone = cardServ.get({cardId:$routeParams.cardId}, function(dt){
		
		//console.log("in >> "+$routeParams.cardId);

	}, function(err){
		
		//console.log("<< out >>");

	});

}]);


appCtrl.controller("MainContoller",["$scope", function($scope){

	$scope.$on("LOAD", function(){
		$scope.loading = true;
	});

	$scope.$on("UNLOAD", function(){
		$scope.loading = false;
	});

	$scope.$on("LOADFAIL", function(){
		$scope.loadingDone = false;
	});

	$scope.$on("LOADCOMPLETED", function(){
		$scope.loadingDone = true;
	});

}]);

appCtrl.controller("CheckoutForm", ["$scope", function($scope){


	// console.log("checkout form init...")
	$scope.user = {};
	$scope.validForm = false;
	$scope.checkoutFormStepOne = function(){

		if( $scope.checkoutstp1.$valid ){
			$scope.validForm = true;
			$scope.queryFormatFormData = $.param($scope.user);
			
		}
	};

}])