//3 key words: let, var, const
let x = 10;
x = 20;
console.log(x);
//output: 20
//cannot repeat the variable for it is already declared; it is safe

var y = 19;
y = 10;
console.log(y);
//10

var y = 30; 
console.log(y);
//30

//you can redeclare the same name of the variable using the var; it can cause errors, not advisable, var is depricated in js

const z = 10;
z = 19;
console.log(z);
//error, const is permanent, when you already decalre the variable on the value, you cannot redeclare
//used for values that should not be changed; inmutable

//CONVERTING STRING TO NUMBER
let amount = "100";
amount = parseInt(amount);
console.log(amount);
//100
//KNOWING THE DATA TYPE
console.log(typeof amount);
//number


//NUMBER TO STRING
let money = 100;
money = money.toString();
console.log(money);
//100
console.log(typeof money);
//string

//CONVERTING STRING TO DECIMAL
let floatValue = "100.39";
floatValue = parseFloat(floatValue);
console.log(floatValue);
//100.39

console.log(typeof floatValue);
//number (floating point number)


