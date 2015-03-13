'use strict';

angular.module('percolateApp')
  .directive('quote', function () {
    return {
      templateUrl: 'app/directives/quote/quote.html',
      restrict: 'E',
      transclude: true,
      scope: {
      	person: '@',
      	image: '@',
      	qtype: '@'
      },
      link: function (scope, element, attrs) {
      	var pad = element.children().children();
      	if(attrs.qtype === 'highlighted') {
      		console.log(true);
      		element.addClass('quote-highlighted');
      		pad.addClass('pad-highlighted');
      	} else {
      		element.addClass('quote-normal');
      		pad.addClass('pad-normal');
      	}
      }
    };
  });