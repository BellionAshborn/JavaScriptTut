// Variables --> Var/let/const 

// let - Local Scope 
// var - Global Scope

// Var -- Can Be Redeclared and Reinitialzed 
// let -- Can Be Reinitialzed but not Redeclared
// const -- Can't Be Reinitialzed and Redeclared as well 

{ 
    var a = 10; 
    var b = 20;    // If these values should be used globaly then it is defiend with "Var" 
}

console.log(a+b); // Var --> Global Scope

{
    let a = 10;      // If these values should be only accessed inside block then it is defined with "Let" 
    console.log(a);  // Let --> Local Scope
}

// const cannot do this 
const num = 50;  
// num = 60;  --> Not possible ( since const is meant to be a constant variable and the value can't be changed for it )
console.log (num);


// Exercise 1 

const price = 20;
const product = "stick"; //String 
const tax = 5;

console.log(product);
console.log("total", price + tax);

// Exercise 2 

var fruitName = "bluberry"; 
var count = 2;
const priced = 10;
var total = (count * priced);

console.log(fruitName);
console.log(total);

/* Keywords 
'var' , 'let' , 'const' , 'if' , 'for' , 'switch' , 'return' , 'function'
*/
