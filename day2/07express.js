var express = require("express");
var app = express();

//router list, middle ware
app.get("/",function(req,res){
	res.set('Content-Type', 'text/html;charset=UTF-8');
	//res common functions are send and sendFile.
    //sendFile means send a page to a user
	//note, must use absolute path as arguments
	//__dirname shows this js file's absolute path
	res.sendFile(__dirname + "/public/index3.html");
});

app.get("/music",function(req,res){
	res.set('Content-Type', 'text/html;charset=UTF-8');
	res.send("Music Page");
});

app.get("/news",function(req,res){
	res.set('Content-Type', 'text/html;charset=UTF-8');
	res.send("News Page");
});

app.get("/student/:studentno",function(req,res){
	res.set('Content-Type', 'text/html;charset=UTF-8');
	if(/^[\d]{6}$/.test(req.params.studentno)){
		res.send("Student Page, Student Number" + req.params.studentno);
	}else{
		res.send("Student NO. is not corret, should be 6 numbers！");
	}
});

//use static file
app.use(express.static("public"));

//listening
app.listen(3000);
console.log("server starts at port 3000");
