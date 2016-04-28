"use strict";

var appCtrl = angular.module("AppCtrls",[]);

appCtrl.controller("CardsList", ["$scope", "$state", "$log","CardServices", "$resource", function($scope, $state, $log, cardServ, $resource){

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

appCtrl.controller("CardDetail",["$scope", "$state", "$stateParams" , "CardServices", function($scope, $state, $stateParams, cardServ){

		console.log("in >> "+$stateParams.cardId);
	var newPhone = cardServ.get({cardId:$stateParams.cardId}, function(dt){
		

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



appCtrl.controller("BookInfoCtrl",["$scope", function($scope){

	/*$scope.books = [
		{ dept: 'social science', count: 30 },
		{ dept: 'natural science', count: 40 },
		{ dept: 'archilogist', count: 30 }
	];

	$scope.maxWidth = 200;
	$scope.minHeight = 200;
	$scope.outerRadius = 100;
	$scope.ringWidth = 100;

	$scope.drawAnimatedRign = function(){
	};


	$scope.drawAnimatedRign({
		el: '.animated-ring svg',
		outerRadius: $scope.outerRadius,
		innerRadius: $scope.outerRadius - $scope.ringWidth,
		data: $scope.books
	});
*/
	var radiusC = [ 
			{sz:40, cl: "hotpink", cx: 40, cy: 40},
			{sz:20, cl: "royalblue", cx: 140, cy: 140},
			{sz:10, cl: "peachpuff", cx: 180, cy: 180} 
		];

	var pieContainer = d3.select('.animated-ring');

	var svgEle = pieContainer.append('svg');
		svgEle.attr({
			width: 400,
			height: 400
		});

/*	var circleEle1 = svgEle.append('circle');
		circleEle1.attr({
			cx: 40,
			cy: 40,
			r: 40	
		})
		.style('fill', 'purple');*/

	var circleEle = svgEle.selectAll('circle')
					.data(radiusC)
					.enter()
					.append('circle');

	var circleAttrs = circleEle
					.attr('cx', function(d){ return d.cx })
					.attr('cy', function(d){ return d.cy })					
					.attr('r', function(d){return d.sz })
					.style('fill', function(c){
						return c.cl;
					})



	//console.log(circleEle);



}])


// ng-table Example //Grouped Table Data
appCtrl.controller('GridTableCtrl', ["$scope", "$filter", "NgTableParams",
	function($scope, $filter, NgTableParams) {

    var tableData = [{name: "Moroni", age: 50, role: 'Administrator'},
                {name: "Tiancum", age: 43, role: 'Administrator'},
                {name: "Jacob", age: 27, role: 'Administrator'},
                {name: "Nephi", age: 29, role: 'Moderator'},
                {name: "Enos", age: 34, role: 'User'},
                {name: "Tiancum", age: 43, role: 'User'},
                {name: "Jacob", age: 27, role: 'User'},
                {name: "Nephi", age: 29, role: 'Moderator'},
                {name: "Enos", age: 34, role: 'User'},
                {name: "Tiancum", age: 43, role: 'Moderator'},
                {name: "Jacob", age: 27, role: 'User'},
                {name: "Nephi", age: 29, role: 'User'},
                {name: "Enos", age: 34, role: 'Moderator'},
                {name: "Tiancum", age: 43, role: 'User'},
                {name: "Jacob", age: 27, role: 'User'},
                {name: "Nephi", age: 29, role: 'User'},
                {name: "Enos", age: 34, role: 'User'}];

    $scope.tableParams = new NgTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
    }, {
        groupBy: 'role',
        total: tableData.length,
        getData: function($defer, params) {
           // var orderedData = params.sorting() ?
                    //$filter('orderBy')(tableData, $scope.tableParams.orderBy()) : tableData;

                   // console.log( orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()) );
			
			// $scope.users = searchedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
           
           $defer.resolve(tableData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
           // $defer.resolve($scope.users);
        	
        }
    });
   /* var searchedData = function(){
	    if($scope.tableData)
	       return $filter('filter')(usersData,$scope.searchedData);
	    return usersData;
	}*/
    /*$scope.applyGlobalSearch = function(term) {

	    $scope.tableParams.filter({ $: term });
	};*/
	/*$scope.$watch("globalSearchTerm", function () {
	    $scope.tableParams.reload();
	});*/
}]);

appCtrl.filter("filterMatchingKeys", function() {
	return function(queryInfos, substring) {
		if ((typeof substring === "undefined") || (substring == ""))
			return queryInfos;
		else if (typeof queryInfos !== "undefined") {
			var queryInfosCopy	= [];

			// console.log();

			angular.forEach(queryInfos, function(queryInfo, index) {

				if (queryInfo.installationAt.toLowerCase().indexOf(substring.toLowerCase()) != -1
					|| queryInfo.adminEmail.toLowerCase().indexOf(substring.toLowerCase()) != -1
					|| queryInfo.poweredBy.toLowerCase().indexOf(substring.toLowerCase()) != -1)
					queryInfosCopy.push(queryInfo);
			});

			return queryInfosCopy;
		}
		else
			return queryInfos;
	};
});

appCtrl.controller("GrpShortCtrl",["$scope","$state", "$document", "NgTableParams", "$filter", function($scope,$state, $document, NgTableParams, $filter){

	var tableData = [
		{
			"installationAt": "EPhiladelphia, PA1",
			"adminEmail": "wksm@pobox.com2",
			"poweredBy": "EPCofax3",
			"poweredByIcon": "/images/cofax.gif4",
			"id": 0
		},
		{
			"installationAt": "APhiladelphia, PA123",
			"adminEmail": "aksm@pobox.com2",
			"poweredBy": "APCofax3",
			"poweredByIcon": "/images/cofax.gif4",
			"id": 2
		},
		{
			"installationAt": "WQPhiladelphia, PA112",
			"adminEmail": "wksm@pobox.com2",
			"poweredBy": "WQCofax3",
			"poweredByIcon": "/images/cofax.gif4",
			"id": 3
		},
		{
			"installationAt": "ESPhiladelphia, PA22",
			"adminEmail": "esksm@pobox.com2",
			"poweredBy": "ESCofax3",
			"poweredByIcon": "/images/cofax.gif4",
			"id": 4
		},
		{
			"installationAt": "ASPhiladelphia, PA41",
			"adminEmail": "asksm@pobox.com2",
			"poweredBy": "ASCofax3",
			"poweredByIcon": "/images/cofax.gif65",
			"id": 5
		},
		{
			"installationAt": "XSPhiladelphia, PA1",
			"adminEmail": "xaksm@pobox.com2",
			"poweredBy": "XSCofax3",
			"poweredByIcon": "/images/cofax.gif4",
			"id": 6
		}

	];

	$scope.show1 = true;
	$scope.show2 = true;
	$scope.show3 = true;
	$scope.show4 = true;

	$scope.tableParams = new NgTableParams({
		 page: 1,
		 count: 10
	    }, {
	    	filterDelay: 0,
	    	// data: tableData
	    	total: tableData.length,
	        getData: function($defer, params) {

				var orderedData = params.sorting() ? $filter('orderBy')(tableData, params.orderBy()) : data;

				orderedData	= $filter('filterMatchingKeys')(orderedData, $scope.keysFilter);

				params.total(orderedData.length);
				
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        	
	        }
	    });

		$scope.$watch("keysFilter", function(newvalue, oldvalue) {
			$scope.tableParams.reload();
		});

	//Select All Checkbox -Starts-
	$scope.checkboxes = {
      checked: false,
      items: {}
    };

    $scope.selectedRow = [];

 	// watch for check all checkbox
    $scope.$watch(function() {
      return $scope.checkboxes.checked;
    }, function(value) {
      angular.forEach(tableData, function(item) {
        	$scope.checkboxes.items[item.id] = value;
        });
    });

     // watch for data checkboxes
    $scope.$watch(function() {
      return $scope.checkboxes.items;
    }, function(values) {
      var checked = 0, unchecked = 0,
        	total = tableData.length;
      angular.forEach(tableData, function(item) {
        checked   +=  ($scope.checkboxes.items[item.id]) || 0;
        unchecked += (!$scope.checkboxes.items[item.id]) || 0;
        
      });
      if ((unchecked == 0) || (checked == 0)) {
        $scope.checkboxes.checked = (checked == total);
      }
      // grayed checkbox
      // angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
      angular.element($document[0].querySelector("#selectAll")).prop("indeterminate", (checked != 0 && unchecked != 0));
    }, true);

    //Select All Checkbox -End-

    $scope.selectAllRows = function(){

    	if( $scope.checkboxes.checked === true ){
    		angular.forEach(tableData, function(item) {
	        	$scope.collectRows(item);
	        });
    	}else if($scope.checkboxes.checked === false){
    		$scope.selectedRow = [];
    	}
    };

	$scope.collectRows = function(row) {

		var recentRow = $scope.selectedRow.indexOf(row);
	    // is currently selected
	    if (recentRow > -1) {
	        $scope.selectedRow.splice(recentRow, 1);
	    }else{
			$scope.selectedRow.push(row);
	    }
	};

	$scope.deleteRows = function(rw) {

		var delRow = $scope.selectedRow || rw;
		//validate each row with selected row array and actual data source and remove from list
		_.remove(tableData, function(item,i) {
			return _.indexOf(delRow, item) !== -1
		});	

		//after updating data source, reload/ refresh table data once.
		$scope.tableParams.reload().then(function(data) {
			if (data.length === 0 && $scope.tableParams.total() > 0) {
			 	$scope.tableParams.page($scope.tableParams.page() - 1);
			  	$scope.tableParams.reload();
			}
			//empty selectedRow array once table data source is updated with removed functionality
			$scope.selectedRow = [];
			$scope.selectRowAuto = false;
		});
    };


	// Second ng Table
	var buildStatus = [
		{"key": "abc000",
		"lastRun": 123,
		"lastSuccessfulTime": 9999,
		"elapsedTime": 456,
		"rows": 10,
		"failed": false
		},
		{"key": "abc001",
		"lastRun": 1234,
		"lastSuccessfulTime": 9999,
		"elapsedTime": 256,
		"rows": 10,
		"failed": false
		},
		{"key": "abc002",
		"lastRun": 111111111,
		"lastSuccessfulTime": 9999,
		"elapsedTime": 156,
		"rows": 10,
		"failed": true
		},
		{"key": "abc003",
		"lastRun": 123,
		"lastSuccessfulTime": 9999,
		"elapsedTime": 656,
		"rows": 10,
		"failed": false
		}];

	$scope.buildStatusTable = new NgTableParams({
		 page: 1,
		 count: 10
	    }, {
	    	filterDelay: 0,
	    	// data: tableData
	    	total: buildStatus.length,
	        getData: function($defer, params) {

				var orderedData = params.sorting() ? $filter('orderBy')(buildStatus, params.orderBy()) : data;

				// orderedData	= $filter('filterMatchingKeys')(orderedData, $scope.keysFilter);

				params.total(orderedData.length);
				
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        	
	        }
	    });

	// console.log( $scope.selectRow );
	// $scope.$watch("selectRow", function(val) {
	// 	console.log("hello...");
	// });

	$scope.selectAll = function(){
		$scope.selectedRow = [];
		angular.forEach(tableData, function (row) {
           $scope.selectedRow.push(row);
	    });
	 	// console.log(item)
	};

	


}])

