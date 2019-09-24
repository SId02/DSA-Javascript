//Program to find the nth Fibonacci in javascript
var fibonacci = function fibonacci(num) {
  //initalize
  var a = 0;
  var b = 1; //to store the sum

  var c = 0; //iterate till the given num

  for (var i = 2; i <= num; i++) {
    //sum of last two numbers
    c = a + b; //assign the last value to first     
    a = b; //assign the sum to the last
    b = c;
  } //if the num is 0 then return a else return b;
  return num ? b : a;
}; console.log(fibonacci(10));




