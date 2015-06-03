'use strict';

describe('Controller: VerCtrl', function () {

  // load the controller's module
  beforeEach(module('pruebaApp'));

  var VerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VerCtrl = $controller('VerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
