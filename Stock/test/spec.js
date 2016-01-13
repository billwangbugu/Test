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
