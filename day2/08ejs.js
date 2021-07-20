var express = require("express");
var app = express();

//set up default template engine,express will import ejs

//cnpm install ejs --save
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("index",{
		"stuffs" : "8 mobil phones",
		"monies" : 1000 * 8 , 
		"idols" : [
			{"fullname" : "Gates" , "ages" : 16},
			{"fullname" : "Jordan" , "ages" : 26},
			{"fullname" : "Jackson" , "ages" : 36}
		]
	});
});

app.listen(3000);
