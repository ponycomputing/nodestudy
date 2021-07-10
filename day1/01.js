//NodeJS non blocking I/) system

//built-in module，file system
var fs = require("fs");

//reading files
fs.readFile("./test.txt",function(err,data){
	//callback function，doing things after reading files
	console.log(data.toString());
});

//do sum calculation
var sum = 0;
for(var i = 0 ; i <= 100 ; i++){
	sum += i;
}
console.log(sum);
