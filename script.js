/*let n = 5;

for (let i = 0; i <n; i++) {
    console.log("hello, ",i);
}

console.log("bye!");

let args = process.argv;

for(let i = 2; i < args.length; i++) {
    console.log("hello to", args[i]);
}
*/

// add math.js in script.js
const math = require("./math");

console.log(math);
console.log("Hello everyone!");
console.log(math.sum(50, 25));
console.log(math.mul(50, 2));
console.log(math.pi);
console.log(math.g);
console.log("Bye");

