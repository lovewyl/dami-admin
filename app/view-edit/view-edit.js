'use strict';

angular.module('myApp.viewEdit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewEdit', {
    templateUrl: 'view-edit/view-edit.html',
    controller: 'ViewEditCtrl'
  });
}])

.controller('ViewEditCtrl', [function() {

}]);