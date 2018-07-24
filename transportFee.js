module.exports = function(shift){
  if (shift ==='morning'){
    return('R20');
  }
 if (shift ==='afternoon'){
    return('R10');
  }
  else if(shift ==='night'){
    return('Free');
  }
};
