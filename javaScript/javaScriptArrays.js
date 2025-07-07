// Declaration of an Array

let myArray = [];
let numbers = [1,2,3,4,5];

let lang = ["java", "python", "javascript"];

//push -- > Appends new elements to the end of an array, and returns the new length of the array. But only adds at the end of the array
lang.push("Ruby");
console.log(lang);

//pop --> Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let removedLang = lang.pop();
console.log(removedLang);
console.log(lang);

//shift --> Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let frutis = ["apple", "orange", "blueberry"];
let firstFruits = frutis.shift();
console.log(firstFruits);
console.log(frutis);

//unshift Elements to insert at the start of the array. Inserts new elements at the start of an array, and returns the new length of the array.
frutis.unshift("Kiwi");
console.log(frutis);

//Splice --> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
let animals = ['Cheetha', 'Wolf', 'Tiger'];
console.log(animals);
let removedAnimals = animals.splice(1,2,'Snow Lepoard');
console.log(removedAnimals);
console.log(animals);

//slice -->  The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.
let number = [1,2,3,6,8,9];
let excludecOne = number.slice(1,5);
console.log(excludecOne);

//concat --> Add two arrays and store it in the third array
let fr = ["apple", "orange", "blueberry"];
let veg = ['Carrot', 'beetroot', 'ladysFinger'];
let mixedArry = veg.concat(fr);
console.log(mixedArry);

//indexOf --> Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
let color = ['grey', 'white', 'black', 'white', 'white'];
let whiteIndex = color.indexOf('white'); //1
console.log(whiteIndex);
let blueIndex = color.indexOf('blue'); //-1
console.log(blueIndex);

//2nd occurance index 
let checkRepeatingIndex = color.indexOf("white", color.indexOf("white")+ 1);
console.log(checkRepeatingIndex);

//3rd Occurance index 
let target = "white";
let nth = 3;
let count = 0;
let index = -1;

for(let i = 0; i < color.length; i++){
    if(color[i] == target){
        count++;
    } if (count == nth){
        index = i;
        break;
    }
}
console.log(index);

//includes --> The element to search for. Determines whether an array includes a certain element, returning true or false as appropriate.
let test = ["seller", "customer", 'vendor'];
let validate = test.includes("customer");
console.log(validate);

//forEach --> foreach method in Array for a basic flow 
let n = [1,2,3,4,5,6];
n.forEach((e) => {
    console.log(e * 2);
});
