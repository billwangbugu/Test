describe('Testing myCtrl that uses a Promise', function () {
  var $scope;
  var $q;
  var deferred;

  beforeEach(module('myApp'));

  beforeEach(inject(function($controller, _$rootScope_, _$q_, myService) {
    $q = _$q_;
    $scope = _$rootScope_.$new();

    deferred = _$q_.defer();

    spyOn(myService, 'getStockData').and.returnValue(deferred.promise);

    $controller('myCtrl', { 
      $scope: $scope, 
      myService: myService
    });
  }));

  it('should resolve promise', function () {

    deferred.resolve([{ id: 1 }, { id: 2 }]);

    $scope.$apply();

    expect($scope.stock).not.toBe(undefined);
    expect($scope.error).toBe(undefined);
  });

  it('should reject promise', function () {

    deferred.reject();

    $scope.$apply();

    expect($scope.error).toBe('There has been an error!');
  });

});
/*
describe('myService', function(){
	var myServ, url;
	var $httpBackend;

	beforeEach(module("exApp"));

	beforeEach(inject(function($injector){

		$httpBackend=$injector.get('$httpBackend');
		url="https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quote where symbol =\"YHOO\"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK"
		$httpBackend.when('JSONP',url).respond({});
	}));

	it('should get feed',function(){
		
		$httpBackend.expectGET('https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quote where symbol =\"YHOO\"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK');
		$httpBackend.flush();
	})


});*/