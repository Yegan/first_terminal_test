'use strict'

let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The count all Paarl function should count only registration numbers that come from Paarl', function(){

    it('Check if this registration starts with CJ', function(){
        assert.equal('1 ', countAllPaarl('CJ789'));
    });
    it('Check if this registration starts with CJ', function(){
        assert.equal('2 ', countAllPaarl('CJ465, CJ798'));
    });
});
