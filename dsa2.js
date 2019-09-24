//FizzBuzz program using javascript


// FizzBuzz Using For Loop
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        console.log("FizzBuzz");
    else if (i % 3 === 0)
        console.log("Fizz");
    else if (i % 5 === 0)
        console.log("Buzz");
    else console.log(i);
}

//FizzBuzz Using Parameter

function fBuz(len, fizzNo, buzzNo) {
    let op;
    for (let i = 1; i <= len; i++) {
        op = '';
        if (i % fizzNo === 0) {
            op += 'Fizz';
        }
        if (i % buzzNo === 0) {
            op += 'Buzz';
        }
        if (i % fizzNo !== 0 && i % buzzNo !== 0) {
            op += i;
        }
        console.log(op);
    }
}
fBuz(100, 3, 5);



var fizzBuzz = function fizzBuzz(arr) {
    return arr.map(function (el) {
        if (el % 15 === 0) return "fizzbuzz";
        if (el % 3 === 0) return "fizz";
        if (el % 5 === 0) return "buzz";
        return el;
    });
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(fizzbuzz(arr));



const fizzBuzz = arr =>
    arr.map(el => {
        if (el % 15 === 0) return "fizzbuzz";
        if (el % 3 === 0) return "fizz";
        if (el % 5 === 0) return "buzz";
        return el;
    });
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(fizzbuzz(arr));



//FizzBuzz using Array

let fizzBuzz = [];
let i = 1;

function fzBz() {
    while (i <= 100) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzz.push("Fizz Buzz");
            console.log("Fizz Buzz");
        } else if (i % 3 === 0) {
            fizzBuzz.push("Fizz");
            console.log("Fizz");
        } else if (i % 5 === 0) {
            fizzBuzz.push("Buzz");
            console.log("Buzz");
        } else {
            fizzBuzz.push(i);
            console.log(i);
        }
        i++;
    }
    console.log(fizzbuzz);
}
fzBz();




//exact copy of an array in JavaScript


let arr1 = ["JS", "CSS", "HTML", "React js", "Angular"];

let cofArr1 = arr1.slice(); // old method

let cofArr2 = arr1 = [...arr1]; //using ES6

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

document.write("<p> String UpperCase  :</p>" + strCase("javascript a is scripting language"));

//Reverse String

function reverseString(str) {
    let revString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
    }
    return revString;
}
document.write("<p>Reverse String :</p>" + reverseString("javascript"));


//Generate Password

function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-_.+,";
    let n, retVal = "";
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
    for (let i = 0; i < str1.length; i++) {
        if (str1[i].length > longestWord) {
            longestWord = str1[i].length;
            Word = str1[i];
        }
    }
    return Word;
}
document.write("<p> Longest Word is:</p>" + LongWord("javascript is a scripting language"));


//InsertionSort

function insertionSort(items) {
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

//Star Pyramid
document.write('<br />');
document.write('<h1> DisplayPyramid</h1>');
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {

        document.write('*');
    }
    document.write('<br />');
}


//towerOfHanoi

function towerOfHanoi(height, src, des, temp) {
    if (height >= 1) {
        towerOfHanoi(height - 1, src, temp, des);
        console.log('Move disk from Tower ', src, ' to Tower ', des);
        towerOfHanoi(height - 1, temp, des, src);
    }
    return;
}
towerOfHanoi(3, "A", "C", "B");


// pattern in javascript

function displayHalfPyramid(height) {

    for (let i = 1; i <= height; i++) {
        let row = ``;

        for (let j = 1; j <= (i - 1); j++) {
            row += ` `;
        }

        for (let j = 1; j <= (height - i + 1); j++) {
            row += `*`;
        }

        console.log(row);
    }
}

displayHalfPyramid(5);

/*
*****
 ****
  ***
   **
    *           
  
  */


//How to empty an array in JavaScript?

arrayList = [];

The code above will set the variable arrayList to a new empty array.This is recommended
if you don 't have 
references to the original array arrayList anywhere
else because It will actually create a new empty array.
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList; // Referenced arrayList by another variable
arrayList = []; // Empty the array
console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']



//Program to sort only positive numbers of the array

let sortOnlyPositive = (arr) => {
    //Filter the positive number from the array
    //And sort them
    let filtered = arr.filter(e => e > 0).sort();

    //Temp array to hold the sorted array
    let sorted = [];

    //To keep track of the positive sorted array list.
    let j = 0;

    //Replace the positive numbers with sorted numbers
    for (let i = 0; i < arr.length; i++) {
        //If the number is positive
        //Then replace it with first number
        //From filtered and sorted positive numbers array
        if (arr[i] > 0) {
            sorted.push(temp[j++]);
        } else {
            //Else push the negative number at the same place
            sorted.push(arr[i]);
        }
    }

    //Return the temp array
    return sorted;
}
console.log(sortOnlyPositive([2, -6, -3, -8, 4, 1]));
console.log(sortOnlyPositive([9, -2, 3, -1, 1, 5]));

//Output:
//[1, -6, -3, -8, 2, 4]
//[1, -2, 3, -1, 5, 9]


//Count number of sub string recursively

let countSubString = (str, subStr, n1 = str.length, n2 = subStr.length) => {
    //If the string is empty
    //Or less than substring
    if (n1 === 0 || n1 < n2) {
        return 0;
    }

    //Check if there is a subString in the original string
    if (str.substring(0, n2) === subStr) {
        //Remove the substring from the original string and call the function with increased count
        return countSubString(str.substring(n2), subStr) + 1;
    }

    //Call same function with one letter less than original string
    return countSubString(str.substring(1), subStr);
}

console.log(countSubString('javascript', 's'));

//1


//Find the largest prime factor

let largetPrimeFactor = (num) => {
    //start from 2
    let i = 2;

    //loop till the given number is less than the square root of the num
    while (i * i < num) {

        //reduce the number till it is divisible by i
        while (num % i === 0) {
            num /= i;
        }

        //increment i
        i++;
    }

    //return the reduced num
    return num;
}
console.log(largetPrimeFactor(100));

//all the unique 2 digit combinations of given numbers

let combinations = (arr) => {
    //remove duplicate numbers
    let set = new Set(arr);

    //create new error from the unique numbers
    arr = [...set];

    //print all the combinations
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }

    }

}

// combinations([1, 2, 3]);
// combinations([1, 2, 3, 4, 5]);



//Check if an array is palindrome in javascript

let palindromeArray = (arr) => {
    //initialize to true
    let isPalindrome = true;

    //loop through half length of the array
    for (let i = 0; i < arr.length / 2; i++) {

        //check if first half is equal to the second half
        if (arr[i] !== arr[arr.length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}
//console.log(palindromeArray([1,2,2,1]));
//console.log(palindromeArray([1,2,2,2]));

//Program to find the nth Fibonacci in javascript

let fibonacci = (num) => {
    //initalize
    let a = 0;
    let b = 1;

    //to store the sum
    let c = 0;

    //iterate till the given num
    for (let i = 2; i <= num; i++) {
        //sum of last two numbers
        c = a + b;

        //assign the last value to first     
        a = b;

        //assign the sum to the last
        b = c;
    }

    //if the num is 0 then return a else return b;
    return num ? b : a;
}

//console.log(fibonacci(10));
//console.log(fibonacci(12));


//Find distinct ways to climb the stairs in javascript.

let selectionSort = (arr) => {

    //Loop till the second last element
    for (let i = 0; i < arr.length - 1; i++) {

        //Loop after the i till the last element
        for (let j = i + 1; j < arr.length; j++) {

            //if jth element is less than the ith element then swap
            //change < to > for sorting in descending order
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

            //Using ES6 Array Destructuring to swap the elements. 
            /*
            if(arr[j] < arr[i]){
               [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
             }
             */


        }

    }

    //return the sorted array
    return arr;
}
console.log(selectionSort([1, 8, 2, 4, 5]));

//Program to add two binary numbers
let addBinary = (a, b) => {

    let str = ''; //To store the final result
    let carry = 0; // To track the carry
    let aSize = a.length - 1;
    let bSize = b.length - 1;

    //Loop through both number while one of them has value
    while (aSize >= 0 || bSize >= 0) {

        let tempA = a[aSize] || 0; // if value is present then use value else use 0
        let tempB = b[bSize] || 0; // if value is present then use value else use 0

        //Add the digits and carry
        let sum = Number(tempA) + Number(tempB) + carry;

        //if sum is greater than 1
        if (sum > 1) {
            //Store the sum and carry
            sum = sum % 2;
            carry = 1;
        } else {
            //Else carry is zero
            carry = 0;
        }

        //store the result   
        str = sum + str;

        aSize--;
        bSize--;
    }

    //If carry still has value then append it to the result
    if (carry) {
        str = carry + str;
    }

    return str;
};
console.log(addBinary('1010', '1011')); //10101


//Linear search algorithm in javascript
let linearSearch = (arr, item) => {
    let found = false;

    //loop through each item in the array
    for (let elements of arr) {
        if (elements === item) {
            found = true;
            break;
        }
    }

    return found;
};
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 7));


//Caesar Cipher in javascript //encryption technique which used to substitute the current alphabets with alphabet after a number of count 
//Key = 13
//13 shift to A is N 
let ceaserCipher = (str) => {
    //Deciphered reference letters
    let decoded = {
        a: 'n',
        b: 'o',
        c: 'p',
        d: 'q',
        e: 'r',
        f: 's',
        g: 't',
        h: 'u',
        i: 'v',
        j: 'w',
        k: 'x',
        l: 'y',
        m: 'z',
        n: 'a',
        o: 'b',
        p: 'c',
        q: 'd',
        r: 'e',
        s: 'f',
        t: 'g',
        u: 'h',
        v: 'i',
        w: 'j',
        x: 'k',
        y: 'l',
        z: 'm'
    }

    //convert the string to lowercase
    str = str.toLowerCase();

    //decipher the code
    let decipher = '';
    for (let i = 0; i < str.length; i++) {
        decipher += decoded[str[i]];
    }

    //return the output
    return decipher;
}
console.log(ceaserCipher('javascript')); //wninfpevcg


//FizzBuzz program in javascript

let fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
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


//Program to find the GCD of two numbers in javascript.

let gcd = (num1, num2) => {

    //Loop till both numbers are not equal
    while (num1 != num2) {

        //check if num1 > num2
        if (num1 > num2) {
            //Subtract num2 from num1
            num1 = num1 - num2;
        } else {
            //Subtract num1 from num2
            num2 = num2 - num1;
        }
    }

    return num2;
}
console.log(gcd(60, 15)); //15

console.log(gcd(60, 36)); //12


//Program to print the pyramid pattern

let pyramidLeft = (rows) => {

    for (let i = 1; i <= rows; i++) {

        let str = '';

        for (let j = 1; j <= i; j++) {
            //Count the '*' for each row
            str += '*';
        }

        //Print the pyramid pattern for each row
        console.log(str);
    }
};
pyramidLeft(5);

Output:
    "*"
"**"
"***"
"****"
"*****"


let pyramidRight = (rows) => {

    for (let i = 1; i <= rows; i++) {
        let str = '';

        //Add the white space to the left
        for (let k = 1; k <= rows - i; k++) {
            str += ' ';
        }

        //Add the '*' for each row
        for (let j = 1; j <= i; j++) {
            str += '*';
        }

        //Print the pyramid pattern for each row
        console.log(str);
    }
}

pyramidRight(5);

Output:
    "    *"
"   **"
"  ***"
" ****"
"*****"

let pyramidComplete = (rows) => {

    for (let i = 1; i <= rows; i++) {
        let str = '';

        //Add the white space to the left
        for (let k = 1; k <= (rows - i); k++) {
            str += ' ';
        }

        //Add the '*' for each row
        for (let j = 0; j != (2 * i - 1); j++) {
            str += '*';
        }

        //Add the white space to the right
        for (let k = i + 1; k <= rows; k++) {
            str += ' ';
        }

        //Print the pyramid pattern for each row
        console.log(str);
    }
}

Input:
    pyramidComplete(5);

Output:
    "    *    "
"   ***   "
"  *****  "
" ******* "
"*********"


//Implement stack with max and min function

function stackWithMax() {
    let items = [];
    let length = 0;

    this.push = (item) => {
        //Check if stack is empty
        //Then add the current value at all place
        if (length === 0) {
            items[length++] = {
                value: item,
                max: item,
                min: item
            };
        } else {
            //Else get the top data from stack
            const data = this.peek();
            let {
                max,
                min
            } = data;

            //If it is greater than previous then update the max
            max = max < item ? item : max;

            //If it is lesser than previous then update the min
            min = min > item ? item : min;

            //Add the new data
            items[length++] = {
                value: item,
                max,
                min
            };
        }
    }

    //Remove the item from the stack
    this.pop = () => {
        return items[--length];
    }

    //Get the top data
    this.peek = () => {
        return items[length - 1];
    }

    //Get the max value
    this.max = () => {
        return items[length - 1].max;
    }

    //Get the min value
    this.min = () => {
        return items[length - 1].min;
    }

    //Get the size
    this.size = () => {
        return length;
    }

    //Check if its empty
    this.isEmpty = () => {
        return length === 0;
    }

    //Clear the stack
    this.clear = () => {
        length = 0;
        items = [];
    }
}

Input:
    let SM = new stackWithMax();
SM.push(4);
SM.push(7);
SM.push(11);
SM.push(23);
SM.push(77);
SM.push(3);
SM.push(1);
SM.pop();
console.log(`max: ${SM.max()}`, `min: ${SM.min()}`);

//Output:
//"max: 77" "min: 3"
