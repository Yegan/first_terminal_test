'use strict'

let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transport fee function', function(){
        it('The function will determine the price of transport based on what shift a person is working', function(){
          assert.equal(transportFee('morning'),'R20')
        });
        it('The function will determine the price of transport based on what shift a person is working', function(){
          assert.equal(transportFee('afternoon'),'R10')
        });
        it('The function will determine the price of transport based on what shift a person is working', function(){
          assert.equal(transportFee('night'),'Free')
        });

});
