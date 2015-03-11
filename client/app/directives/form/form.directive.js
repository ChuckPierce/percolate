'use strict';

angular.module('percolateApp')
  .directive('demoform', function () {
    return {
      templateUrl: 'app/directives/form/form.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  })
  .controller('FormCtrl', function($scope) {
  	$scope.inputs = ['First Name', 'Last Name', 'Company'];
  	$scope.email = {};
  	$scope.sendEmail = function() {
  		console.log($scope.email);
  	}
  });