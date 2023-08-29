const sum = (a, b) => a+b;
const mul = (a, b) => a*b;
const g = 9.8;
const pi = 3.14;
const name = "Mr. Abhishek singh"; 
let obj = {
    sum : sum,
    mul : mul,
    g : g,
    pi : pi
}

module.exports = obj;
console.log(name);
//module.exports = "numbers", 123;