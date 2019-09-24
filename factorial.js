//factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
let n=prompt("Enter the value:"); 
alert(factorial(n)); // n=5 120 

