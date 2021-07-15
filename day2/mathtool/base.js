function powerof(a){
	return a * a;
}

//max number
function maxnumber(){
	return Math.max.apply(null,arguments);
}

exports.sum = sum;
exports.average = average;
exports.powerof = powerof;
exports.maxnumber = maxnumber;
