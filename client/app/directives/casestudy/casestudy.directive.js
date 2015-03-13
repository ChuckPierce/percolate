'use strict';

angular.module('percolateApp')
  .directive('casestudy', function () {
    return {
      templateUrl: 'app/directives/casestudy/casestudy.html',
      restrict: 'E',
      transclude: true,
      scope: {
      	title: '@'
      },
      link: function (scope, element, attrs) {
        console.log(element.html());
      }
    };
  });