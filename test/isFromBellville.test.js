'use strict'

let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The Bellville registration function' , function(){

    it('The function should return true if the registration is from Bellville' , function(){
        assert.equal(true, isFromBellville("CY 123 543"));
    });

    it('The function should return false if the registration is not from Bellville' , function(){
        assert.equal(false, isFromBellville("CL 54354"));
    });

    it('The function should return a result even if there is no registration input' , function(){
        assert.equal((' '), isFromBellville('Please enter a valid registration number'));
    });

});
