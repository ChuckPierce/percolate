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
      //makes a post to the email express post route
  		$http.post('/api/emails', $scope.email).success(function(data) {
        //if the email is sent alert the user that it was sent
  			console.log(data);
  			$scope.email = {};
  			$scope.message = {text: 'Request for demo sent!', error: false};
  			deleteMessage();
  		}).error(function(err) {
        //if there is an error, tell the user it didn't go through and ask them to try again
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