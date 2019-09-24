function mergesort(list) {
  var compare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x, y) {
    return x < y;
  };
  // breaking recursive call
  if (list.length <= 1) return list; // ES6 flag --harmony_destructuring needed when run in Node 5.0.0

  // var _splitList = splitList(list),
  //   leftHalf = _splitList.leftHalf,
  //   rigthHalf = _splitList.rigthHalf; // Recursive call.
  // Passing compare function to recursive calls to prevent the creation of unnecessary
  // functions on each call.


  var splitLists = splitList(list),
    leftHalf = splitLists.leftHalf,
    rigthHalf = splitLists.rigthHalf;


  return jointLists(mergesort(leftHalf, compare), mergesort(rigthHalf, compare), compare);
}

function splitList(list) {
  if (list.length == 0) return {
    leftHalf: [],
    rigthHalf: []
  };
  if (list.length == 1) return {
    leftHalf: list,
    rigthHalf: []
  };
  var index = Math.floor(list.length / 2);
  return {
    leftHalf: list.slice(0, index),
    rigthHalf: list.slice(index)
  };
}

function jointLists(list1, list2, compare) {
  // getting the biggest array
  var iterator = list1.length > list2.length ? list1.length : list2.length; // defining auxiliar variables

  var result = [],
    index1 = 0,
    index2 = 0; // sortering previously ordered arrays

  while (true) {
    if (compare(list1[index1], list2[index2])) {
      result.push(list1[index1]);
      index1++;
    } else {
      result.push(list2[index2]);
      index2++;
    }

    if (index1 == list1.length || index2 == list2.length) break;
  } // some of the array still have elements that are not listed on the result arrays,
  // since this elements have a biggest value (according to the compare function)
  // we can just push this elements at the very end of the result


  if (index1 < list1.length) return result.concat(list1.slice(index1));
  if (index2 < list2.length) return result.concat(list2.slice(index2));
  return result;
}

console.log(mergesort([34, -2, 3, 5, -6, 1, 35])); // [ -6,-2,1,3,5,34,35]


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


//Check if an array is palindrome in javascript
var palindromeArray = function palindromeArray(arr) {
  //initialize to true
  var isPalindrome = true; //loop through half length of the array

  for (var i = 0; i < arr.length / 2; i++) {
    //check if first half is equal to the second half
    if (arr[i] !== arr[arr.length - i - 1]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

console.log(palindromeArray([1, 2, 2, 1]));

//selectionSort
var selectionSort = function selectionSort(arr) {
  //Loop till the second last element
  for (var i = 0; i < arr.length - 1; i++) {
    //Loop after the i till the last element
    for (var j = i + 1; j < arr.length; j++) {
      //if jth element is less than the ith element then swap
      //change < to > for sorting in descending order
      if (arr[j] < arr[i]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      } //Using ES6 Array Destructuring to swap the elements. 

      /*
      if(arr[j] < arr[i]){
         [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
       }
       */

    }
  } //return the sorted array


  return arr;
};

console.log(selectionSort([1, 8, 2, 4, 5]));


//
function fibonacci(num) {
  var i = 1, j = 0
  while (num >= 1) {
    j = i + j
    i = j - i
    num--
    console.log(j)
  }
  //return (j)
}

fibonacci(5)
//recursive

var num = prompt("What number do you want to find the factorial of?");
var factorial = function (n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(num));