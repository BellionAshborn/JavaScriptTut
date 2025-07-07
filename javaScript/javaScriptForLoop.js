/* In javaScript a for loop is control flow statement used to repeatedly execute a block of code based on a specific condition */ 

// Exercise 1 Print 1 - 10 numbers
let count = 1; 
for(let i = 1; i <=10; i ++){
    console.log(count);
    count++;
};

console.log("-------------");

// Exercise 2 Print even numbers 
let num = 20;
for(i = 1; i <= num; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

console.log("-------------");

// Exercise 3 Sum of First N Natural Numbers
let N = 15;
let sum = 0;
for(i=1; i<=N; i++){
    sum = sum + i;
    console.log(sum);
}

console.log("-------------");

// Exercise 4 Multiplication Table
let digit = 2;
let multiply = 0;
for(i=1; i<=5; i++){
    multiply = digit * i;
    console.log(multiply);
}

console.log("-------------");

// Exercise 5 Print an Array in Reverse
let arr = ['2','5','8','9'];
let reverse = '';
for(i=arr.length-1; i>=0; i--){
    reverse = arr[i];
    console.log(reverse);
}

console.log("-------------");

// Exercise 6 Print 1-10 but increment by 2
let number = 10;
for(i=1; i<=number; i+=2){
    console.log(i);
}

console.log("-------------");

// Exercise 7 Print 2 tables
let table = 2;
for (let i = 1; i <= 10; i++) {
    console.log('2 x ' + i + ' = ' + (2 * i));
}

console.log("-------------");

// Exercise 8 Count Vowels in a String 
var str = "sarerggp";
var vowelCount = 0;
for(i=1; i<str.length; i++){
    let ch = str[i]
    if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
        vowelCount++;
    }
}
console.log(vowelCount);

console.log("-------------");

// Exercise 9 Array of numbers

var arry = [23, 2342, 423424, 345];
var largestNum = Number(arry[0]);
for(let i=1; i<arry.length; i++){
    let currentNum = Number(arry[i]);
    if(currentNum > largestNum){
        largestNum = currentNum;
    }
}
console.log(largestNum);

console.log("-------------");

// Exercise 10 Print All Odd Numbers Between Two Numbers

var startNum = 2;
var endNum = 10;
for(i=startNum; i<=endNum; i++){
    if(i%2 != 0){
        console.log(i);
    }
}

console.log("-------------");

// Exercise 11 Print Each Character of a String

var str = "Vanhelsing"; 
for(i=0; i<str.length; i++){
    let ch = str[i];
    console.log(ch);
}

console.log("-------------");

// Exercise 12 For numbers 1 to 50, print “Fizz” for multiples of 3, “Buzz” for multiples of 5, and “FizzBuzz” for multiples of both 3 and 5. Otherwise, print the number.

for(i=1; i<=50; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log('Print FizzBuzz');
    } else if(i%3 == 0){
        console.log("print Fizz");
    } else if(i%5 == 0){
        console.log("print Buzz");
    } else {
        console.log(i);
    }
}

console.log("-------------");

// Exercise 13 Print the even numbers 1 - 100

let l = 2 
while(l <= 10){ 
    console.log(l);
    l = l+2;
}

console.log("-------------");

// Exercise 14 Print the odd numbers 1 - 100

let o = 1 
while(o <= 100){ 
    console.log(o);
    o = o+2;
}

console.log("-------------");

// Exercise 15 Do-While Loop --> Atleast one time it will be printed or executed the code inside the do block and then it starts to check the condition on the while
let h = 1;
do{
    console.log(h); // 1 //2 //..
    h++;
}
while(h <= 10);

// Exercise 16 Break-While Loop --> Print Hi on the multiplication of 5

console.log("-------------");

let n = 1;
while(n <= 100){
  console.log(n); // here the numbers are printed 
  if(n%5 == 0){
    console.log("Hi");
    break; 
  }
  n++
}

console.log("-------------");

// Exercise 17 another different for of loop is been used here for the Array 

const browser = ['Chrome', 'Firefox', 'Edge'];
for(const e of browser){
    //console.log(e);
    if(e == 'Edge'){
        console.log('This is edge here')
        break;
    }
}

console.log("-------------");
 
// Exercise 18 another different for in loop is been used here for the Array 

const user = {
    UserName : 'Bellion',
    Category : 'Shadow',
    Rank : 'God Mode',
}
for(const key in user){
    console.log(key + ":" + user[key]);
}



