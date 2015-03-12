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
  	$scope.message = {};
  	$scope.sendEmail = function() {
  		$http.post('/api/emails', $scope.email).success(function(data) {
  			console.log(data);
  			$scope.email = {};
  			$scope.message = {text: 'Request for demo sent!', error: false};
  			deleteMessage();
  		}).error(function(err) {
  			console.log(err);
  			$scope.email = {}
  			$scope.message = {text: 'Your email was not sent! Please try submitting again', error: true};
  			deleteMessage();
  		})
  	}

  	var deleteMessage = function() {
  		setTimeout(function() {
  			$scope.message = {};
  			$scope.$apply();
  		}, 3000);
  	}
  });