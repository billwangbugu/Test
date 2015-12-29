describe('exCtrl', function(){
	var scope;
	var $con;
	var $httpBackend;

	beforeEach(module("exApp"));

	beforeEach(inject(function($rootScope,$controller,$injector){
		scope = $rootScope.$new();
		$con =$controller;
		$httpBackend=$injector.get('$httpBackend');
		$httpBackend.when('GET','http://api.fixer.io/latest?base=CAD').respond({});
	}));

	it('should get initial countries', function(){
		var myCtrl = $con('exCtrl',{$scope:scope});
		expect(scope.amount).toBe(1);
		expect(scope.fromId).toBe('CAD');
		//expect(scope.toId).toBe('USD');

	});
	it('should get feed',function(){
		var myCtrl = $con('exCtrl',{$scope:scope});
		$httpBackend.expectGET('http://api.fixer.io/latest?base=CAD');
		scope.setBase('CAD');
		$httpBackend.flush();
	})


});