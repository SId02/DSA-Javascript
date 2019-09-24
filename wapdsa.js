//FizzBuzz Program

// 1 
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0)
      console.log("FizzBuzz");
    else if (i%3 === 0) 
      console.log("Fizz");    
    else if (i%5 === 0)
      console.log("Buzz");    
    else console.log(i);    
} 

// 2 
let fizzBuzz = (n) => {
   for(let i = 1; i <= n; i++){
     if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
     }else if(i % 3 === 0){
        console.log('Fizz');
     }else if(i % 5 === 0){
        console.log('Buzz');
     }else{
        console.log(i);
     }
   }
}
fizzBuzz(15);
/*
1
2
"Fizz"
4
"Buzz"
"Fizz"
7
8
"Fizz"
"Buzz"
11
"Fizz"
13
14
"FizzBuzz"
 */

// 3
const fizzBuzz = arr => arr.map(el =>{ 
if ( el % 15 ===0) return "fizzbuzz";
if(el % 3 === 0) return "fizz";
if(el % 5 === 0) return "buzz";
return el;
 }); 
const arr=[1,3,5,7,9,11,13,15]; 
console.log(fizzBuzz(arr));
// [1,'fizz','buzz',7,'fizz',11,13,'FizzBuzz']; 




//exact copy of an array in JavaScript

let arr1=["JS","CSS","HTML","React js","Angular"];

let cofArr1=arr1.slice(); // old method

let cofArr2=arr1=[...arr1];//using ES6

document.write(`Org Array : ${arr1} <br><br> `);
document.write(`Using Old Browser :  ${cofArr1} <br><br>`);
document.write(`Using ES6:  ${cofArr2} <br>`);


//Reverse Integer


function reverseInteger(num) {
    let revInteger = num.toString().split('').reverse().join('');
    return parseInt(revInteger) * Math.sign(num);
}
document.write("<p>Reverse Integer:</p>" + reverseInteger(21));





//String to UpperCase
function strCase(str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

document.write("<p> String UpperCase  :</p>" +strCase("javascript a is scripting language"));

//Reverse String

function reverseString(str) {
  let revString = '';
  for(let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;
  }
  document.write("<p>Reverse String :</p>" + reverseString("javascript"));
  
  
  //Generate Password
  
  function generatePassword() {
    const length = 12;
    const  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-_.+,";
       let n,retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
document.write("<p>Password is:</p>" + generatePassword());

//Longest Word

function LongWord(str) {
  let str1 = str.split(' ');
  let Word = '';
  let longestWord = 0;
  for(let i = 0; i < str1.length; i++){
    if(str1[i].length > longestWord){
      longestWord = str1[i].length;
      Word = str1[i];
    }
  }
  return Word;
}
document.write("<p> Longest Word is:</p>" + LongWord("javascript is a scripting language"));



// Traversing an array

function traverse() {
  let names = ["Angular","JS","Reactjs","Vue js"],
    count;

  for (count = 0; count < names.length; count++) {
    console.log(names[count]);
  }
};

traverse();

function traverse() {
  let names = ["Angular","JS","Reactjs","Vue js"];

  names.forEach(function(name) {
    console.log(name);
  });
};

traverse();












//InsertionSort

function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let val = items[i]
    for (var j = i - 1; j > -1 && items[j] > val; j--) {
      items[j + 1] = items[j]
    }
    items[j + 1] = val;
  }
  return numsort;
}
const numsort = [56, 10, 53, 80, 77, 31, 4, 98, 25]
document.write(insertionSort(numsort));