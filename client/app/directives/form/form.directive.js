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
  .controller('FormCtrl', function($scope, $http) {
  	$scope.inputs = ['First Name', 'Last Name', 'Company'];
  	$scope.email = {};
  	$scope.sendEmail = function() {
  		$http.post('/api/emails', $scope.email).success(function(data) {
  			console.log(data);
  			$scope.email = {};
  			$scope.message = 'Request for demo sent!'
  		}).error(function(err) {
  			console.log(err);
  			$scope.email = {}
  			$scope.message = 'Something went wrong.  Please try submitting again';
  		})
  	}
  });