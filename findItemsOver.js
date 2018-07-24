module.exports = function (items, threshold){
var list = [];
  for(var i=0;i<items.length;i++){;
  var item = items[i];
  if(item.qty>threshold){
    list.push(item);
  console.log(list)
  }
  }
  return list;
}
