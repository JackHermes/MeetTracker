var React = require('react');
var ReactTestUtils = require('react/lib/ReactTestUtils');

var App = require('../src/components/App.js');
var expect = chai.expect;

describe('app', function () {
  it('renders without problems', function () {
    var app = ReactTestUtils.renderIntoDocument('jo');
    expect(app).toExist();
  });
});