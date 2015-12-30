var myApp=angular.module("myApp",['ngRoute','ui.bootstrap']);

myApp.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/home.html'
            })

            .when('/login', {
                templateUrl : 'pages/login.html'
            })

            .when('/password', {
                templateUrl : 'pages/passwordRemind.html'
            })

            .when('/registration', {
                templateUrl : 'pages/registration.html'
            })

            .when('/trail',{
                templateUrl:'pages/features.html'
            })

            .when('/features',{
                templateUrl:'pages/features.html'
            })
            
            .when('/reset',{
                templateUrl:'pages/resetPW.html'
            })
            
            .when('/logout',{
                templateUrl:'pages/logout.html'
            })


            .when('/articles',{
                templateUrl:'pages/articles.html'
            })

            .when('/details',{
                templateUrl:'pages/details.html'
            });
    });

myApp.controller("mainCtrl",function($scope){

        $scope.navTags = [
                            {"face":"Login","routeTag":"login","loggedIn":false},
                            {"face":"Forgot Password","routeTag":"password","loggedIn":false},
                            {"face":"Registration","routeTag":"registration","loggedIn":false},
                            {"face":"Trail","routeTag":"trail","loggedIn":false},
                            {"face":"Features","routeTag":"features","loggedIn":true},
                            {"face":"Reset Password","routeTag":"reset","loggedIn":true}
                          ];

        $scope.logged=false;
        
        $scope.login=function(){
            $scope.logged=true;
        };

        $scope.logout=function(){
            $scope.logged=false;
        }

});

myApp.controller("validateCtrl",['$scope','$location', function($scope,$location){
    $scope.email="";
    $scope.password="";
    $scope.myPassword="1234";
    
    $scope.validationEmail=function(){
        var re = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        return re.test($scope.email);
    };

    $scope.login = function(){
        //logged in, update logged to true
        $scope.$parent.login();
        $location.path('/features');
    }

    $scope.logout = function(){
        //$scope.$confirm({text:"Are you sure you want to logout?",title:"Logout",OK:"Yes",cancel:"No"}).then(function(){$scope.logoutConfirm="Confirm";});
      //logout, update logged to false  
        $scope.$parent.logout();    
        //redirect to home page
        $location.path('/');

    }

}]);



myApp.controller("featureCtrl",['$scope','$http','$location',function($scope,$http,$location){
    $http.get("data/feedly.json").success(function(data){
        $scope.features=data;
    });
    $scope.itemIndex=0;

    $scope.go=function(page){
        if($scope.logged){
            $location.path(page);
        }else{
            $location.path('/login');
        }
    }
    
    $scope.detailGo=function(a){
        if (a=="next") {
            $scope.itemIndex +=1;
        }else if(a=='last' && $scope.itemIndex != 0){
            $scope.itemIndex -=1;
        }
        
        $location.path('/details');
    }
}]);

