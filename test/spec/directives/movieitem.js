'use strict';

describe('Directive: movieItem', function () {

  // load the directive's module
  beforeEach(module('pmoviesWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<movie-item></movie-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the movieItem directive');
  }));
});
