//Name of the file : assert.notDeepEqual.js
var assert = require('assert');
var a = 10;
var b = '10';
var c = 10.25;
//Case 1
assert.notDeepEqual(a,c, "Nothing printed because they are using !== for comparison");
//Case 2
assert.notDeepEqual(a,b, "Error because values match here");

