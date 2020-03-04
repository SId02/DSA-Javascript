// Counting number of vowels in a string with JavaScript


//ES6

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(countVowels('test')); // 1
console.log(countVowels('ddd')); // 0


//ES5

'use strict';

var countVowels = function countVowels(str) {
  return Array.from(str).filter(function (letter) {
    return 'aeiou'.includes(letter);
  }).length;
};

console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(countVowels('test')); // 1
console.log(countVowels('ddd')); // 0


//ES6
function countVowels(str){
    return (str.match(/[aeiou]/gi) == null) ? 0 : str.match(/[aeiou]/gi).length;        
}
console.log(countVowels("Helloo World"));//4

