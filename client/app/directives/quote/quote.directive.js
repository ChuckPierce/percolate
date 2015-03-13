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
      	//select the element with the pad class
      	var pad = element.children().children();
      	//if the element has the type of highlighted then give it the class of quote highlighted
      	if(attrs.qtype === 'highlighted') {
      		console.log(true);
      		element.addClass('quote-highlighted');
      		pad.addClass('pad-highlighted');
      	//else it is a normal quote
      	} else {
      		element.addClass('quote-normal');
      		pad.addClass('pad-normal');
      	}
      }
    };
  });