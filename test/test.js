var expect = require('chai').expect;
var string = 'There and Back Again';

describe('String', function() {
  it('should be a string', function() {
    expect(string).to.be.a('string');
  })
})
