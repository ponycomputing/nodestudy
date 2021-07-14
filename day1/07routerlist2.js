//router list practice

var http = require("http");
var fs = require("fs");

http.createServer((req,res)=>{
	if(req.url == "/b.html"){
		fs.readFile("./public/b.html",function(err,data){
			res.end(data);
		});
	}else if(req.url == "/css.css"){
		fs.readFile("./public/css.css",function(err,data){
			res.end(data);
		});
	}else if(req.url == "/index.css"){
		fs.readFile("./public/index.css",function(err,data){
			res.end(data);
		});
	}else if(req.url == "/0.jpg"){
		fs.readFile("./public/0.jpg",function(err,data){
			res.end(data);
		});
	}else if(req.url == "/1.jpg"){
		fs.readFile("./public/1.jpg",function(err,data){
			res.end(data);
		});
	}else if(req.url == "/s.js"){
		fs.readFile("./public/s.js",function(err,data){
			res.end(data);
		});
	}else{
		res.end("Page not found");
	}
}).listen(3000);
console.log("server starts at 3000 port");
