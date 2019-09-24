Kruskal's algorithm
Bellman Ford's Algorithm
Dijkstra's Algorithm
Linked List



How To Swap Two Values Without Temporary Variables Using JavaScript


Using an array: [a, b] = [b, a]; // my favorite

Using an object: {a, b} = {a:b, b:a}; // not bad neither

ES6+ method: Since ES6, you can swap variables more elegantly. You can use destructuring assignment array matching. It’s simply. var a=10 b=20;

// var a = 5;
// var b = 10;

// // [a, b] = [b, a]; // ES6
// {a, b}={a:b,b:a};
// console.log(a, b);
console.log('a:', a, 'b:', b);
var a = 1,
    b = 2;
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a, b);

var a = 1,
    b = 2,
    tmp;
tmp = a;
a = b;
b = tmp;

console.log(a, b);


var a = 1,
    b = 2,
//     tmp;
// tmp = a;
// a = b;
// b = tmp;


a=a+b;
b=a-b;
a=a-b;

console.log(a, b);



function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  return n * factorial(n - 1);  //Here's the recursion
}


var n=prompt("Enter the value:");  // Enter any value

alert(factorial(n));
//----------------------------------------------------------------------------------------------------------------------------------------------------

How To Swap Two Values With/Without Temporary Variables Using JavaScript

//Without Temporary Variables

let a= 10 , b=20; 
[a, b] = [b, a]; // ES6
console.log('a:', a, 'b:', b);

let a= 10 , b=20; 
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log('a:', a, 'b:', b);  // a: 20 b: 10

let a= 10 , b=20; 
a=a+b;
b=a-b;
a=a-b;
console.log('a:', a, 'b:', b); // a: 20 b: 10


With Temporary Variables

let a= 10 , b=20 ,tmp; 
tmp = a;
a = b;
b = tmp;
console.log('a:', a, 'b:', b); //a: 20 b: 10



//---------------------------------------------------------------------------------------------------------------------------------------------
//factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  return n * factorial(n - 1);  //Here's the recursion
}


var n=prompt("Enter the value:");  // Enter any value

alert(factorial(n));