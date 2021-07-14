var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var querystring = require("querystring");


http.createServer((req,res)=>{
	//transfer to object,change url string to json object
	var urljson = url.parse(req.url);
	//got file path
	var pathname = urljson.pathname;
	//got extend name
	var extname = path.extname(pathname);
	//got querying string
	var qs = urljson.query;
	//transfer to query object,similar with url.parse plus true
	var qsjson = querystring.parse(qs);

	console.log(pathname);
	console.log(extname);
	console.log(qsjson);

	res.end("");
}).listen(3000,"127.0.0.1");
console.log("server starts at 3000 port");
