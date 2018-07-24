'use strict'

let assert = require("assert");
let regCheck = require("../regCheck");


describe('The registration check function', function(){
  it('The function is looking for a valid registration number',function(){
    assert.equal(regCheck('123 456 GP','GP'),true);
  });

  it('The function is looking for non-valid registration numbers',function(){
    assert.equal(regCheck('GP 123 456','GP'),false);
  });

  it('The function should check if there is an input',function(){
    assert.equal(regCheck('Please enter a registration number'),(' '));
  });

});
