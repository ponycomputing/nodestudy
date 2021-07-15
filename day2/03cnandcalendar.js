var solarLunar = require('solarLunar');
var cfn = require("chinese-finance-number");

var result = solarLunar.solar2lunar(2021, 7, 16);
console.log(result);

var result2 = cfn(12345678.09);
console.log(result2);
