function chef(){
	for(var i = 0 ; i < arguments.length ; i++){
		console.log("I am chef，I am going to do " + arguments[i]);
	}
}

//service function, send all arguments to chef.
function service(){
	chef.apply(null,arguments);
}

service("Dish1","Dish2","Dish3");
