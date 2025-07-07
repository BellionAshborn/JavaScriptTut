/*  
  if else 

  Syntax:

  if(condition = true){
    code to be executed if the condition is true 
  } else {
    code to be executed if the condition is not true 
  };

*/

var homeWork = false

if(homeWork){
    console.log('great job');
} else {
    console.log('finish your homework before playing');
}

console.log("-------------");

// Exercise 1 Even or Odd Number Checker

function number(a){
    if(a%2 === 0){
        console.log("the number is even"); 
    } else {
        console.log("the number is not even");
    }
};

number(2);
number(3);

console.log("-------------");

// Exercise 2 Age Eligibility Checker

function eligibility(personsAge){
    if(personsAge >= 18){
        console.log("eligible for voting"); 
    } else {
        console.log("not eligible for voting");
    }
};

eligibility(23);
eligibility(17);

console.log("-------------");

// Exercise 3 Largest of Two Numbers

function greaterValue(a,b){
    if(a > b){
        console.log(a + "This is a greater than" + b); 
    } else if(a===b){
        console.log("both are equal");
    } else {
        console.log(b + "This is greater than" + a);
    }
};

greaterValue(23,12);
greaterValue(23,23);
greaterValue(23,43);

console.log("-------------");

// Exercise 4 Positive, Negative, or Zero

function checking(a){
    if(a > 0){
        console.log("This is a positive number"); 
    } else if(a < 0){
        console.log("This is a negative number");
    } else {
        console.log("The value is zero");
    }
};

checking(10);
checking(-1);
checking(0);

console.log("-------------");

// Exercise 5 Grade Evaluator

function studentsMark(mark){
    if(mark >= 90){
        console.log("A")
    } else if (mark >= 75){
         console.log("B")
    } else if (mark >= 50){
         console.log("c")
    } else {
        console.log("F");
    }
}

studentsMark(92);

console.log("-------------");

/* 

logical AND -->  If AND is used then it both the values should be true 
console.log(true && true); Ture
console.log(true && false); False

logical OR -->  If OR is used then it both the values should be true 
console.log(true || false); Ture 

logical NOT -->  If NOT is used as the opposite value - True means False / False means True
console.log(!true); False 

*/

const red = Symbol('red');
const yellow = Symbol('yellow');
const green = Symbol('green');

function trafficLights(a){
    if(a == red){
        console.log("Stop");
    } else if (a == yellow){
        console.log("Get Ready");
    } else if (a == green) {
        console.log("Go");
    } else {
        console.log('Invalid Signal');
    }
}

trafficLights(red);
trafficLights(yellow);
trafficLights(green);

console.log("-------------");

function points(Score){
    if(Score < 50){
        console.log("You need to improve");
    } else if(Score <= 70){
        console.log("Good Job");
    } else if (Score > 70){
        console.log("Excellent Performance");
    } else {
        console.log("Invalid score");
    }
}

points(66)

console.log("-------------");

const VOWELS = ['a','e','i','o','u']
function vowel(ch){

    const letter = String(ch).toLowerCase(); // here even if we pass 'A' it will be changed and validated

    if(VOWELS.includes(letter)){
        console.log('This is a vowel character');
    } else {
        console.log("This is not a vowel");
    }
}

console.log("-------------");
