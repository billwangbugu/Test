var photoApp = angular.module('photoApp',[]);

photoApp.controller('photoCtrl',['$scope', function($scope){
	$scope.photoList=[
		"https://farm6.staticflickr.com/5659/20530009206_dbd3d6e2f7_z.jpg",
		"https://farm6.staticflickr.com/5835/20556282315_2e2cc7e969_z.jpg",
		"https://farm6.staticflickr.com/5814/20368264168_9826baa996_z.jpg",
		"https://farm6.staticflickr.com/5687/20556283065_a8a74f8760_z.jpg",
		"https://farm6.staticflickr.com/5803/20562757351_9fdb5743c2_z.jpg",
		"https://farm6.staticflickr.com/5735/19935398423_a523eb1a8a_z.jpg"
		];	
	
	$scope.firstphotoUrl = $scope.photoList[0];


	$scope.photoDisplay=function(url){
		$scope.firstphotoUrl=url;
	};
}]);
/*
photoApp.factory('chunk',function(arr,size){
	var newArr = [];
  	for (var i=0; i<arr.length; i+=size) {
    	newArr.push(arr.slice(i, i+size));
  	}
  	return newArr;
});
*/