'use strict'

let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The count all Paarl function should count only registration numbers that come from Town', function(){

    it('Check if this registration starts with CJ', function(){
        assert.equal('1 ', countAllFromTown('CL789'));
    });
    it('Check if this registration starts with CJ', function(){
        assert.equal('2 ', countAllFromTown('CL465,CL798'));
    });
});
