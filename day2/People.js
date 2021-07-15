function People(name,sex,age){
	this.name = name;
	this.sex = sex;
	this.age = age;
}
People.prototype.selfIntro = function(){
	console.log("I am " + this.name + "，I'm " + this.age + "years old" + "，I am " + this.sex + " group");
}

// exports.People = People;
module.exports = People;
