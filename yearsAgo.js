module.exports = function (year){
  	console.log(year)
	var todaysDate = new Date();
  	var currentYear = todaysDate.getFullYear();
	console.log(currentYear);
  return currentYear -year
}
