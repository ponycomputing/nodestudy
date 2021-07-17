/**
 * this practice shows get request arguments how to get
 **/

var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static');
var url = require("url");
var fs = require("fs");

//set up statice source server, static the public folder
var serve = serveStatic('public', {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function onRequest (req, res) {
	//router
	var pathname = url.parse(req.url).pathname;

	if(pathname == "/addStudent"){
		//got get arguments,to get url contents
		var queryJSON = url.parse(req.url,true).query;
		//console.log(queryJSON.name);
		//console.log(queryJSON.age);
		//console.log(queryJSON.gender);

		//will write text contents
		var data = "Name：" + queryJSON.name + "\r\n";
		data += "Age：" + queryJSON.age + "\r\n";
		data += "Gender:" + queryJSON.gender + "\r\n";

		//write file
		fs.writeFile("./student_data/" + queryJSON.name + ".txt",data,function(err){
			if(err){
				res.end("mistake");
			}else{
				res.end("ok");
			}
		});

		return;
	}

	//use static enviroment
	serve(req, res, finalhandler(req, res));
});

// Listen
server.listen(3080,"127.0.0.1");
console.log("server starts at port 3080");
