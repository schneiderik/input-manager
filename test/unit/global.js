let chai = require('chai');
let sinonChai = require('sinon-chai');

chai.use(sinonChai);

global.sinon = require('sinon');
global.expect = require('chai').expect;

beforeEach(function () {
  this.sandbox = sinon.sandbox.create();
  this.sandbox.stub(console, 'warn');

  document.body.innerHTML = '';
});

afterEach(function () {
  this.sandbox.restore();
});
