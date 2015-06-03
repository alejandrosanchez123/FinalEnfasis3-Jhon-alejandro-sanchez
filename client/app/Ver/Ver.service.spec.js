'use strict';

describe('Service: Ver', function () {

  // load the service's module
  beforeEach(module('pruebaApp'));

  // instantiate service
  var Ver;
  beforeEach(inject(function (_Ver_) {
    Ver = _Ver_;
  }));

  it('should do something', function () {
    expect(!!Ver).toBe(true);
  });

});
