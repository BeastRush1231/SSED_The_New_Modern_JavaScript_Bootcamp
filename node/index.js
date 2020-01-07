const counterObject = require('./myscript.js');

console.log(counterObject.getCounter()); // 0
counterObject.incrementCounter();
console.log(counterObject.getCounter()); // 1

const newcounterObject = require('./myscript.js');

console.log(newcounterObject.getCounter()); // 1

//