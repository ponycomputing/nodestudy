//other way to approve node.JS is single thread

var http = require("http");

var server = http.createServer(function(req,res){
	//vistor will have a random number
	var num = parseInt(Math.random() * 1000);
	//if random number is 666，throw out error
	if(num === 666){
		throw new Error("Error, 666 coming, the IP address is" + req.connection.remoteAddress);
	}
	//set up header response
	res.setHeader("Content-Type","text/html;charset=UTF-8");
	res.end("your number is" + num);
});
