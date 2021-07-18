/**
 * this case shows using formidalbe treat POST request arguments
 **/

var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static');
var url = require("url");
var fs = require("fs");
var querystring = require("querystring");
var formidable = require('formidable');
var path = require("path");

// set up static environment server,make public folder to be static
var serve = serveStatic('public', {'index': ['index2.html', 'index2.htm']})

// Create server
var server = http.createServer(function onRequest (req, res) {
	//router
	var pathname = url.parse(req.url).pathname;
	
	if(pathname == "/fileupload"){
		//create form instance, this is formidable API
		var form = new formidable.IncomingForm();
		//set up where to save uploaded files
		form.uploadDir = "./uploads";
		//deal form
	    form.parse(req, function(err, fields, files) {
	    	//fields this shows comman controller
	    	//files this shows file controller

	    	//test if has wenjian controller
	    	if(!files.wenjian){
	    		return;
	    	}
			
			//test uploaded files have name
			if(!files.wenjian.name){
				return;
			}
			//extend name
			var extname = path.extname(files.wenjian.name);
			//change name, because formidalbe uploads file no names
			//fs rename methods change name。files.wenjian.path is default path + file name
			//change to default path + file name + extend name
			fs.rename(files.wenjian.path , files.wenjian.path + extname , function(){
				res.end("Uploads success");
			});
	    });
		return;
	}

	//use static environment
	serve(req, res, finalhandler(req, res));
});

// Listen
server.listen(3000);
console.log("Sever starts at port 3000, connect index2.html");
