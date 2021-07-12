//the code below to approve node.JS is single thread
var http = require("http");

//define variable a outside server
var a = 0;

var server = http.createServer(function(req,res){
    //let a value increase by 1
    a++;
    //set up header response
    res.setHeader("Content-Type","text/html;charset=UTF-8");
    //to display value of a, inside the end must be a string
    res.end(a.toString());
});

server.listen(3000);
console.log("server is running at port 3000");
