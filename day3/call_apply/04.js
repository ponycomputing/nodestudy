//cauculate all real numbers sum
function sum(){
	for (var i = 0 , _sum = 0; i < arguments.length; i++) {
		_sum += arguments[i];
	}
	return _sum;
}


//first calculate sum,then average 
function average(){
	var _sum = sum.apply(null,arguments);
	return _sum / arguments.length;
}

console.log(average(6,6,6,6,8,8,8,8,8));


