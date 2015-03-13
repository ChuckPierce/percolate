'use strict';

angular.module('percolateApp')
  .directive('quote', function () {
    return {
      templateUrl: 'app/directives/quote/quote.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });