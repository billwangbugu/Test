var myApp=angular.module("myApp",[]);

myApp.factory('myService',function($q, $http){
	return{
		getStockData: function(symbol){
			var deferred =$q.defer();
			var query='select * from yahoo.finance.quote where symbol ="' + symbol+'"';
			var format = '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';
			var url="https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(query)+ format;

			$http.jsonp(url).success(function(json){
				var quotes=json.query.results.quote;
				deferred.resolve(quotes);
			})
			.error(function(){
				deferred.reject();
			});
			return deferred.promise;
		}
	};
});

myApp.controller("myCtrl",["$scope","myService", function($scope,myService){

	$scope.symbol="YHOO";
	$scope.stock=[];

	$scope.getData=function(){
		$scope.stock=[];
		
		var promise = myService.getStockData($scope.symbol);

		promise.then(function(data){
			$scope.stock=data;
		})
		.catch(function(){
			$scope.error='There has been an error!';
		});
	};

	$scope.getData();

}]);
