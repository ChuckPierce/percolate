'use strict';

angular.module('percolateApp')
  .directive('highlight', function () {
    return {
      templateUrl: 'app/directives/highlight/highlight.html',
      restrict: 'E',
      transclude: true
    };
  });