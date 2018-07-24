'use strict'

let assert = require("assert");
let fromWhere = require("../fromWhere");


describe('The from where function',function(){
  it('The function should check where a specific registration number is from', function () {
    assert.equal(fromWhere('CY', 'CY456789'),('Bellville'))
  });
  it('The function should check where a specific registration number is from', function () {
    assert.equal(fromWhere('CA', 'CA456789'),('Cape Town'))
  });
  it('The function should check where a specific registration number is from', function () {
    assert.equal(fromWhere('Any place'),('Some other place!'))
  });
});
