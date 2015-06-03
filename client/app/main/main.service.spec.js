'use strict';

describe('Service: main', function () {

  // load the service's module
  beforeEach(module('pruebaApp'));

  // instantiate service
  var main;
  beforeEach(inject(function (main) {
    main = main;
  }));

  it('should do something', function () {
    expect(!!main).toBe(true);
  });

});
