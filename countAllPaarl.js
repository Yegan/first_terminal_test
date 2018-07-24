module.exports = function (regNum){
  var paarl = [];
  	var reg = regNum.split(', ');
  	for (var i = 0; i<reg.length;i++){
      var registrationNum = reg[i];
    	console.log(reg)
      if (registrationNum.startsWith('CJ')){
        paarl.push(registrationNum);
       }
   //   console.log(paarl)
    }
  return paarl.length;
}
