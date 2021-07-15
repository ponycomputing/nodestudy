var People = require("./People.js");
var mt = require("./mathtool");

//Instantiable three examples
var adam = new People("Adam","Male",20);
var eve = new People("Eve","Female",18);
var john = new People("John","Male",30);
adam.selfIntro();
eve.selfIntro();
john.selfIntro();

//计算他们的平均年龄
var aveRage = mt.average(adam.age,eve.age,john.age);
console.log(aveRage);
