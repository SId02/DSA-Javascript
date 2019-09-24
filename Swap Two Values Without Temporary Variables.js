//How To Swap Two Values Without Temporary Variables Using JavaScript

//ES6 

let a= 10 , b=20; 
[a, b] = [b, a]; // ES6
console.log("Using ES6 : " 'a:', a, 'b:', b);



let x= 500, y= 800; 
x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log('x:', x, 'y:', y);  // a: 800 b: 500

let i= 8000 , j=3000; 
i=i+j;
j=i-j;
i=i-j;
console.log('i:', i, 'j:', j); // a: 3000 b: 8000