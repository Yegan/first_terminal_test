'use strict'

let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The function find items over ', function(){
   it('It should return all items with a greater quantity than 30',function(){
     var threshold = 30
     var itemList = [
   {name : 'apples', qty : 10},
   {name : 'pears', qty : 37},
   {name : 'bananas', qty : 27},
   {name : 'apples', qty : 3},
   ];
assert.deepEqual(findItemsOver(itemList, threshold), [{name : 'pears', qty : 37}])

    });

    it('It should return all items with a greater quantity than 20',function(){
      var threshold = 20
      var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 30},
    ];
 assert.deepEqual(findItemsOver(itemList, threshold),[{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 30}])

     });

});
