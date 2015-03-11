'use strict';

angular.module('percolateApp')
  .directive('banner', function () {
    return {
      templateUrl: 'app/directives/banner/banner.html',
      restrict: 'E',
      scope: {
      	message: '@'
      },
      link: function (scope, element, attrs) {
      }
    };
  });