//router list example

var http = require("http");
var fs = require("fs");

var server = http.createServer((req,res) => {
	//set up header response
	res.setHeader("Content-Type","text/html;charset=UTF-8");
	//router list：
	if(req.url == "/"){
		res.end("Home Page");
	}else if(req.url == "/music"){
		res.end("Music Page");
	}else if(req.url == "/news"){
		res.end("News Page");
	}else if(/^\/student\/[\d]{6}$/.test(req.url)){
		var reg = /\/student\/([\d]{6})/;
		//extract student number,use function exec,squre brackets 1 means $1
		var number = reg.exec(req.url)[1];
		//reading file, mimic json data base
		fs.readFile("./db.json",function(err,data){
			if(err){
				res.end("Failed to read file");
				return;
			}
			//Change to object, if use readFile to read files must use toString() to change
			var dataObj = JSON.parse(data.toString());
			//see whether "database" has this student
			if(dataObj.hasOwnProperty(number)){
				res.write("<h1>Student info，Numbers：" + number + "</h1>");
				res.write("<h2>Name：" + dataObj[number]["name"] + "</h2>");
				res.write("<h2>Chinese：" + dataObj[number]["chinese"] + "</h2>");
				res.write("<h2>Math：" + dataObj[number]["math"] + "</h2>");
	 			res.end("");
			}else{
	 			//if no this student number, throw out a error message
				res.end("<h1>Our school don't has this student！</h1>");
			}
		});
	}else{
		res.end("sorry, don't have this page");
	}
});

server.listen(3000);
console.log("server is running out port 3000");
