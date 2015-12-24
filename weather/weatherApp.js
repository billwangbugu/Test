var app = angular.module("weatherApp",[]);
var cityId="CAXX0043";

app.controller("weatherCtrl", function($scope, $http){
	$http.get("city.json").success(function(data){
		$scope.cities = data;
	});

	$scope.cityWeather=function(cityId){
		$scope.cityId=cityId;
		var url="http://sympatico.vo.llnwd.net/o46/export/weather_json/"+ cityId +".json";
		$http.get(url).success(function(data){
			$scope.description=data[cityId].current.description;
			$scope.icon=data[cityId].current.graphic;
			$scope.temperature=data[cityId].current["temp-meter"].temperature.value;
			$scope.dateValue = data[cityId].dategenerated.substring(0,10);
		});
	}
	
	$scope.cityWeather(cityId);

});