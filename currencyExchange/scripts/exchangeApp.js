var exApp=angular.module('exApp',[]);

exApp.controller('exCtrl',['$scope','$http',function($scope,$http){
	$scope.amount=1;

	$scope.currencyIds = [
							{curId:'CAD',displayName:'Canadian Dollar (CAD)'},
							{curId:'USD',displayName:'U.S.A. Dollar (USD)'},
							{curId:'GBP',displayName:'Great Britain (GBP)'},
							{curId:'JPY',displayName:'Japanese Yan (JPY)'},
							{curId:'CNY',displayName:'Chinese Yan (CNY)'},
							{curId:'HKD',displayName:'Hongkong Dollar (HKD)'}
						]
	$scope.fromId = $scope.currencyIds[0].curId;
	$scope.toId = $scope.currencyIds[1].curId;

	$scope.setBase = function(base){
		url="http://api.fixer.io/latest?base="+base;
		$http.get(url).success(function(data){
			$scope.exchangeRates = data.rates;			
		});
	};
	
	$scope.setBase($scope.fromId);
}]);
