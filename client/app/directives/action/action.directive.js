'use strict';

angular.module('percolateApp')
  .directive('action', function () {
    return {
      templateUrl: 'app/directives/action/action.html',
      restrict: 'EA',
      transclude: true,
      scope: {
      	title: '@',
      	image: '@',
      	icon: '@'
      },
      link: function (scope, element, attrs) {
      }
    };
  });