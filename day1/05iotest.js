//Nodejs asynchronous I/O charactor，strength at multi tasks，weakness is calculation

//create server
var http = require("http");
//reading file
var fs = require("fs");

var server = http.createServer(function(req,res){
	//ip address
	var ip = req.connection.remoteAddress;
	console.log(ip + "is coming, start to calculate！");
	//calculation
	for(var i = 1000; i <= 9999 ; i++){
		var ge = i % 10,
			shi = parseInt(i / 10) % 10,
			bai = parseInt(i / 100) % 10,
			qian = parseInt(i / 1000);
		var sum = Math.pow(ge,4) + Math.pow(shi,4) + Math.pow(bai,4) + Math.pow(qian,4);
		if(sum == i){
			console.log(ip + "got result" + i);
		}
	}

	console.log(ip + "finish calculation，start reading file");
	
	//then going to read file：
	fs.readFile("./public/a.html",function(err,filecontent){
		//set up header response
		res.setHeader("Content-Type","text/html;charset=UTF-8");
		//show content of file：
		res.end(filecontent);
		//note
		console.log(ip + "finish reading！");
	});
});

server.listen(3000);
console.log("server  is running at port 3000");
