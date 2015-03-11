'use strict';

describe('Directive: casestudy', function () {

  // load the directive's module and view
  beforeEach(module('percolateApp'));
  beforeEach(module('app/directives/casestudy/casestudy.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<casestudy></casestudy>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the casestudy directive');
  }));
});