//FizzBuzz using map and array
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