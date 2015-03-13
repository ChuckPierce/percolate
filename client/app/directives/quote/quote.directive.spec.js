'use strict';

describe('Directive: quote', function () {

  // load the directive's module and view
  beforeEach(module('percolateApp'));
  beforeEach(module('app/directives/quote/quote.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<quote></quote>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the quote directive');
  }));
});