'use strict'

let assert = require("assert");
let isWeekday = require("../isWeekday");


describe('The is week day function', function(){
  it('The function should check whether it is a week day',function(){
    assert.equal(isWeekday('Monday'), true)
  });
  it('The function should check whether it is not a week day',function(){
    assert.equal(isWeekday('Sunday'), false)
  });
});
