

//  count how many consonants are in a string javascript

//es6
let str = 'asdfghaaa';

let result = str.split('').filter(e => e.match(/[^aeiou]/) != null).length;

console.log(result); // 5


//es5

'use strict';

var str = 'asdfghaaa';

var result = str.split('').filter(function (e) {
  return e.match(/[^aeiou]/) != null;
}).length;

console.log(result); //5