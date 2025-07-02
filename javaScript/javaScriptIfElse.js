// if else 

/*  
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