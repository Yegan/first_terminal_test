module.exports = function(bill){
  	var price = bill.split(', ');
  	var callList = 0;
  	var smsList= 0;
  	for (var i = 0; i<price.length; i++){
    var elements = price[i];
     if (elements.startsWith('c')){// checking the list for calls
      callList = callList+1;
          }

    else if (elements.startsWith('s')){// checking the list for sms
		smsList=smsList+1
    }
    }

  var total = callList*2.75 + smsList*0.65;
  console.log(total)
  return 'R'+total.toFixed(2);

  }
