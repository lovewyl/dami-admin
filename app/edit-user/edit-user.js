'use strict';
//添加用户模块
angular.module('myApp.view1.editUser', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state({
            name:'view1.editUser',
            url:'edituser/{name}',
            templateUrl: 'edit-user/edit-user.html',
            controller: 'EditUserCtrl'
        });
    }])

    .controller('EditUserCtrl', ['$scope','$http','$location','$stateParams','UserService',function($scope,$http,$location,$stateParams,UserService) {

        //当前表单更新用户对象
        $scope.user = UserService.one($stateParams.name);
        $scope.action = $scope.user?'更新用户':'新增用户';
        $scope.onSubmit = function (valid) {
            if(valid){
                console.log($scope.user);
                var action = $scope.action == '更新用户'?'update':'add';
                $http.post('http://localhost/dami/edit-user.php?action='+action,$scope.user).then(function (resp) {
                    console.log(resp);
                    var result = resp.data;
                    if(result.success){//操作成功
                        //更新本地缓存数据
                        console.log(111);
                        UserService.setUsers(result.data);
                        //跳转页面
                        $location.path('/view1');
                    }else{
                        alert('保存失败，请重试');
                    }

                });
            }

        }

    }]);