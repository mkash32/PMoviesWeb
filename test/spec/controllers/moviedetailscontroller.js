'use strict';

describe('Controller: MoviedetailscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('pmoviesWebApp'));

  var MoviedetailscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviedetailscontrollerCtrl = $controller('MoviedetailscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MoviedetailscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
