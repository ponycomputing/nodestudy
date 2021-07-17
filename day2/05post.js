/**
 * how to get POST aruments
 **/

var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static');
var url = require("url");
var fs = require("fs");
var querystring = require("querystring");

//set up statice source server, static the public folder
var serve = serveStatic('public', {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function onRequest (req, res) {
	//router
	var pathname = url.parse(req.url).pathname;

	if(pathname == "/addStudent"){
		// define a content variable, for temporary save request contents
	    var content = "";     
	 
	    //post request normally very long,then will be separate to several paragraphs
		//about 800k per HTTP text paragraphs
	    req.on('data', function(chunk){  
	    	console.log("One pargarph received")
	    	//merge paragraphs
	        content += chunk;
	    });
	 
	    // finished sending all data, will active end events
	    req.on('end', function(){    
	        content = querystring.parse(content);
	        
	       	//wrting contents to file
			var data = "Name：" + content.name + "\r\n";
			data += "Age：" + content.age + "\r\n";
			data += "Gender:" + content.gender + "\r\n";

			//write files
			fs.writeFile("./student_data/" + content.name + ".txt",data,function(err){
				if(err){
					res.end("mistake");
				}else{
					res.end("ok");
				}
			});
			
	        res.end("ok");
	    });
		return;
	}

	//use static environment
	serve(req, res, finalhandler(req, res));
});

// Listen
server.listen(3000,"127.0.0.1");
console.log("Sever starts at Port 3000");
