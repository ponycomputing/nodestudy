//Hello World

//using built-in moudule, for create server
var http = require("http");

//create server
var server = http.createServer(function(req,res){
    res.end("<h1>One week has" + (2 + 5) + "days！</h1>");
});

//listen
server.listen(3000);
console.log("server is running at port 3000");
