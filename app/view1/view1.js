'use strict';

angular.module('myApp.view1', ['ui.router'])//[ngRoute]

    // .config(['$routeProvider', function($routeProvider) {
    //     $routeProvider.when('/view1', {
    //         templateUrl: 'view1/view1.html',
    //         controller: 'View1Ctrl'
    //     });
    .config(['$stateProvider', function($stateProvider) {
            $stateProvider.state({
                name:'view1',
                url:'/view1',
                templateUrl: 'view1/view1.html',
                controller: 'View1Ctrl'
            });
    }])

    .controller('View1Ctrl', ['$scope','$http','$state','UserService',function($scope,$http,$state,UserService) {
        // $http.jsonp('http://localhost/dami/get-users.php?jsonp_callback=JSON_CALLBACK').then(function (resp) {
        //     console.log(resp);
        // });
        //先看看有没有缓存的数据
        $scope.users = UserService.getUsers();
        if(!$scope.users){
            UserService.all().then(function () {
                $scope.users = UserService.getUsers();
            })
        }
        $scope.addUser = function () {
            // $location.path('/editUser/:name');
            $state.go('view1.editUser',{name:''});
        };
        $scope.updateUser = function (name) {
           // $location.path('/editUser/'+name);
            $state.go('view1.editUser',{name:name});
        };
    }]);