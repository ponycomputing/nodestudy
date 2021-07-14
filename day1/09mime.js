var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var querystring = require("querystring");

//mime pairs
var mime = {
	".jpg" : "image/jpeg",
	".jpeg" : "image/jpeg",
	".gif" : "image/gif",
	".png" : "image/png",
	".html" : "text/html;charset=UTF-8",
	".css" : "text/css",
	".js" : "application/x-javascript",
	".mp3" : "audio/mpeg"
};

var server = http.createServer((req,res)=>{
	//got what is vistor reading ,for example
	//http://127.0.0.1/public/0.jpg
	var pathname = url.parse(req.url).pathname;
	//got extend name
	var extname = path.extname(pathname);
	//if extend name not exsited in url,it will be folder, automatic add /index.html
	if(!extname){
		//if the end is not/,browser will have reconise image path hirachy issues
		//for example, http://127.0.0.1/b 和http://127.0.0.1/b/ is different
		//first think same path image,sencond think folder b
		if(pathname.substr(-1) != "/"){
			res.writeHead(302, { "Location" : pathname + "/" })
		}
		pathname += "/index.html";
	}

	//will really to read 0.jpg of public
	fs.readFile("./public/" + pathname , function(err,data){
		if(err){
			res.end("File not found");
			return;
		}

		//check if belongs known mime styles
		if(mime.hasOwnProperty(extname)){
			res.setHeader("content-type",mime[extname]);
		}
		res.end(data);
	});
});

server.listen(3000,"127.0.0.1");
console.log("server is running, public folder is root path name");
