'use strict'

let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The count all Paarl function should count only registration numbers that come from Paarl', function(){

    it('Check if this registration starts with a valid registration number', function(){
        assert.equal('1 ', countRegNumber('CJ789'));
    });
    it('Check if this registration starts with a valid registration number', function(){
        assert.equal('2 ', countRegNumber('CA465, CJ798'));
    });
});
