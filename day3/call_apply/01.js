//this is a function,purpose is to change context a property to 100
//don't know change which one's a property to 100, should see funcation call context pointing to which one

function test(){
	this.a = 100;
}

//test1 object
var test1 = {
	a : 8,
	b : 9
}

//test2 object
var test2 = {
	a : 10,
	b : 3
}

//running test function,and same time call test1 object is test1 function context

test.call(test1);

console.log(test1);
console.log(test2);
