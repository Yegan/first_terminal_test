'use strict'

let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe ('The function total phone bill',function(){
    it('The function should take in a list and calculate the total of the phone bill', function(){
    assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
  });
  it('The function should take in a list and calculate the total of the phone bill', function(){
  assert.equal(totalPhoneBill('call, sms, call'),'R6.15');
});

it('The function should take in a list and calculate the total of the phone bill', function(){
assert.equal(totalPhoneBill(''),'R0.00');
});

});
