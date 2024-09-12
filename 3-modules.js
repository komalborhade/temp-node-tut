// node uses commonJs library under to hood
// every file in node is a module

// // Modules
// const secret = "SUPER SECRET";  //available everywhere in this file
// const komal='komal'
// const sona='sona'

const names = require('./4-names');
const {komal} = require('./4-names');
const {sona} = require('./4-names');
// console.log(names);

const sayHi = require('./5-utils')

const data = require('./6-alternative-flavor')
console.log(data);


sayHi("akshu"); //invoking function sayHi
sayHi(komal);
sayHi(sona);

// sayHi(names.komal);
// sayHi(names.sona);

require('./7-mind-grenade')