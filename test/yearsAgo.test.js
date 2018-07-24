'use strict'

let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The function should check how many years ago a certain year was', function(){
        it('', function(){
          assert.equal(yearsAgo(2015),3)
        });
        it('', function(){
          assert.equal(yearsAgo(2016),2)
        });


});
