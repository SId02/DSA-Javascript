/*
Traversing an array
and
/*Functional programming*/
*/

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

/**************************/

/*
Problem statment
Given an array of unsorted numbers and a target element.
Find if any two elements subtract to the target element or not.
You can loop through the array only once.
Constraint: Time complexity should be O(n)
Hint : Use map for data stroage
*/

Solution

"use strict";

function twoDiff(arr, target) {

  var map = {};

  for (var i = 0; i < arr.length; i++) {
    var sub = arr[i] - target;
    var add = arr[i] + target;
    if (map[sub] || map[add]) {
      return true;
    } else {
      map[arr[i]] = true;
    }
  }

  return false;
}

console.log(twoDiff([1, 2, 3, 4, 5], 3));

/**************************/
/*Problem :
Given an array of positive integers find all the duplicate elements.*/

Solution
function findDuplicates(data) {

  let result = [];

  data.forEach(function(element, index) {
    
    // Find if there is a duplicate or not
    if (data.indexOf(element, index + 1) > -1) {
      
      // Find if the element is already in the result array or not
      if (result.indexOf(element) === -1) {
        result.push(element);
      }
    }
  });

  return result;
}

console.log( findDuplicates([]) ); // []
console.log( findDuplicates([1, 1, 1]) ); // [1]

/***************************************/
/*Length of Longest Substring Without Repeating Characters*/
/*Solution*/




//************************************************************************************************************************************************


/*
Problem statment
Given an array of unsorted numbers and a target element.
Find if any two elements subtract to the target element or not.
You can loop through the array only once.
Constraint: Time complexity should be O(n)
Hint : Use map for data stroage
*/

function twoDiff(arr, target) {

  let map = {}

  for (let i = 0; i < arr.length; i++) {
    let sub = arr[i] - target
    let add = arr[i] + target
    if ( map[sub] || map[add] ) {
      return true
    } else {
      map[arr[i]] = true
    }
  }

  return false
}

console.log( twoDiff([1,2,3,4,5], 3) ) // true
console.log( twoDiff([5,4,3,2,1], 7) ) // false
console.log( twoDiff([5,4,3,2,1], 2) ) // true



/*-------------------------------------*/

/*
Problem :
Given an array of positive integers find all the duplicate elements.
Algorithm :
Iterate over the array using forEach
Find if there is a duplicate for the element using indexOf
indexOf takes two arguments first the element and the second one is the starting index
We provide the starting index as the index + 1 where index is the index of the current element
We will find if the same element exists on the right hand side of that element or not
If there’s a duplicate and the element is not already being added to the result then push it to the array
 */

Solution :

function findDuplicates(data) {

  let result = [];

  data.forEach(function(element, index) {
    
    // Find if there is a duplicate or not
    if (data.indexOf(element, index + 1) > -1) {
      
      // Find if the element is already in the result array or not
      if (result.indexOf(element) === -1) {
        result.push(element);
      }
    }
  });

  return result;
}

console.log( findDuplicates([]) ); // []
console.log( findDuplicates([1, 1, 1]) ); // [1]
console.log( findDuplicates([1, 2, 3, 1, 2, 1]) ); // [1, 2]




/*
Length of Longest Substring Without Repeating Characters
*/

Solution


function lengthOfLongestSubstring(s) {
  
  if (s.length <= 1)
    return s.length
  
  let lookup = new Map()
  let len = s.length
  let max = 0
  let start = 0
  
  for (let i = 0; i < len; i++) {
    let c = s.charAt(i)
    
    if (lookup.has(c) && lookup.get(c) >= start) {
      start = lookup.get(c) + 1; // Read the logic in the notes above
    }
    
    lookup.set(c, i)
    
    max = Math.max(max, i - start + 1)
  }
  
  return max;
}

console.log(lengthOfLongestSubstring('OBAMACARE')) // 4
console.log(lengthOfLongestSubstring('ABBA')) // 2



/*Implement the bind function in javascript*/

Solution


Function.prototype.bind1 = function (scope) {
  let fn = this
  let prefixArgs = Array.prototype.slice.call(arguments, 1)
  
  return function() {
    let suffixArgs = Array.prototype.slice.call(arguments)
    let args = prefixArgs.concat(suffixArgs)
    return fn.apply(scope, args)
  } 
}

// Ex 1: Create a function with a preset leading argument
function list() {
  // arguments is an array-like object. convert arguments to an array.  
  return Array.prototype.slice.call(arguments);
}
console.log( list(1, 2, 3) ) // [1, 2, 3]

var leadingThirtysevenList = list.bind1(null, 37)
console.log( leadingThirtysevenList() ) // [37]
console.log( leadingThirtysevenList(1, 2, 3) ) // [37, 1, 2, 3]

// Ex 2: Changing the scope of `this`
var foo = {
  x: 3
}

function bar (){
  console.log(this.x)
}

var boundFunc = bar.bind1(foo)
boundFunc() // 3

/*
Merge Two Sorted Linked Lists in Javascript
*/

Solution 

function mergeTwoSortedLists (l1, l2) {

    let mergedLinkedListHead = { val : -1, next : null }; // create dummy node to get started
    let runner = mergedLinkedListHead;

    while(l1 && l2) {
        if(l1.val > l2.val) {
            runner.next = l2;
            l2 = l2.next;
        } else {
            runner.next = l1;
            l1 = l1.next;
        }
        runner = runner.next;
    }

    // l1 = 1->2->3, l2 = 10->20->30
    // In that case l1, will point to null and while loop will break
    // Simply point runner to l2. We do not have to add individual nodes
    runner.next = l1 || l2;

    return mergedLinkedListHead.next;
}


/*Find loop length in a cyclic/circular linked list*/
Solution:
function LinkedList () {
  this.head = null;
}

LinkedList.prototype.loopLength = function () {
  var isLoop, loopLength;
  var p1, p2;

  isLoop = false;
  loopLength = 1;

  p1 = this.head;
  p2 = this.head;

  while (p2.next.next) {
    p2 = p2.next.next;
    p1 = p1.next;

    if (p1 === p2) {
      isLoop = true;
      break;
    }
  }

  if (isLoop) {
    p2 = p2.next;
    while (p1 !== p2) {
      loopLength++;
      p2 = p2.next;
    }
    return loopLength;
  } else {
    return 0;
  }

};

var L1 = new LinkedList();
var testData = [1,2,3,4,5,6];
testData.forEach(el => L1.insertNodeAtTail(el));

// Create a circular linked list
L1.head.next.next.next.next.next.next = L1.head.next.next;
console.log(L1.loopLength()); // 4

// Remove circular dependency
L1.head.next.next.next.next.next.next = null;
console.log(L1.loopLength()); // 0


/*
Implement reduce in javascript
*/
Solution:


/*Implement setInterval using setTimeout in javascript*/
Solution:
function customSetInterval (cb, interval) {
  return setTimeout( () => {
    if (typeof cb == 'function') {
      cb()
      // Recurse
      customSetInterval(cb, interval)
    } else {
      console.error(new Error('Expecting a function as a callback'))
    }
  }, interval)
}

function resetCustomSetInterval (id) {
  clearTimeout(id)
}

function hello (){
  console.log('hello')
}
 
let id = customSetInterval(hello, 1000)

let id2 = customSetInterval('hello', 1000) // [Error: Expecting a function as a callback]


/*Currying in javascript*/
Solution:
function add10 (a) {
  return a + 10
}

function compound (f) {
  return function (b) {
    return f(f(b))
  }
}

console.log( add10(10) ) // 20
console.log( compound(add10)(10) ) // 30

/*Multi dimensional arrays in javascript*/
Solution
var activities = [
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 2],
    ['Play Game', 2],
    ['Sleep', 7]
];
//console.log(activities[0][1]);
activities.push(['Study',2]);
for (var i = 0; i < activities.length; i++) {
    var percentage = ((activities[i][1] / 24) * 100).toFixed();
    activities[i][2] = percentage + '%';
}
//console.log(activities.join('\n'));

activities.pop();
//console.log(activities.join('\n'));

for (var i = 0; i < activities.length; i++) {
    activities.pop(2);
}
//console.log(activities.join('\n'));

// loop the outer array
for (var i = 0; i < activities.length; i++) {
    // get the size of the inner array
    var innerArrayLength = activities[i].length;
    // loop the inner array
    for (var j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}

/*increment an integer array by one*/
Solution:
function increment ( numbers ) {

  let iterator = numbers.length - 1

  while ( iterator >= 0 ) {
    let num = numbers[ iterator ]
    num++

    if (num > 0 && num <= 9) {     
      numbers[ iterator ] = num
      break
    } else {
      numbers[ iterator ] = 0
      if ( iterator == 0 ) { // For the [ 9, 9, 9 ] case 
        numbers.unshift(1)
        break
      }
      iterator--
    }
  }
  return numbers
}

console.log(increment([ 2, 7, 2 ])) // [ 2, 7, 3 ]
console.log(increment([ 2, 7, 9 ])) // [2, 8, 0]
console.log(increment([ 2, 9, 9 ])) // [3, 0, 0]
console.log(increment([ 9, 9, 9 ])) // [1, 0, 0, 0]


/*Find the first unique character in a given string or an array*/
Solution

function findFirstUniqueCharacter( inputString ) {
    let freqCounter = [];

    // The issue using Map data structure is during the retrival. As it does not gaurantee the keys will be retrived in the same order as they were inserted
    // Hence, we use an array of frequency counter. But in this array keys are found using the ascii values of the character.

    inputString.split('').forEach(ch => {
        if (!freqCounter[ch])
            freqCounter[ch] = 1;
        else
            freqCounter[ch]++;
    });

    // Observe this array. It's kinda Map only.
    console.log(freqCounter);

    for (let i = 0; i < inputString.length - 1; i++) {
        let ch = inputString[i];
        if (freqCounter[ch] == 1)
            return ch;
    }
    return 'No Unique Character Found';
}

console.log(findFirstUniqueCharacter('foobar')); // f
console.log(findFirstUniqueCharacter('aabbccdef')); // d
console.log(findFirstUniqueCharacter('aabbcc')); // 'No Unique Character Found'


/*Given an array of numbers, return array of products of all other numbers*/
Solution
function productPuzzle(data) {
  
  var len = data.length
  var left = new Array(len)
  var right = new Array(len)
  
  // prepare the left array
  left[0] = 1
  for(let i = 1; i < len; i++) 
    left[i] = left[i-1] * data[i-1]
  console.log(left) // [ 1, 1, 2, 6 ]

  // prepare the right array
  right[len-1] = 1
  for (let j = len-2; j >= 0; j-- ) 
    right[j] = right[j+1] * data[j+1]
  console.log(right) // [ 24, 12, 4, 1 ]
  
  return data.map((el, index) => {
    return left[index] * right[index]
  })

}

console.log(productPuzzle([1, 2, 3, 4])) // [ 24, 12, 8, 6 ]


/*Reverse a singly linked list*/
Solution
function LinkedList () {
    this.head = null;
}

LinkedList.prototype.reverseLinkedList = function () {

  // Empty or a single element Linked List
  if (!this.head || !this.head.next) {
    console.log('No duplicates were found. Empty or a single element Linked List.');
    return;
  }
  
  var p1 = null;
  var p2 = this.head;
  var p3;

  while (p2) {
    p3 = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p3;
  }

  this.head = p1;
}

// Base case : Zero nodes
var L1 = new LinkedList();

L1.reverseLinkedList();
console.log(L1);

// Single node
var L2 = new LinkedList();
L2.insertNodeAtTail(5);

L2.reverseLinkedList();
console.log(L2);

// Two nodes 
var L3 = new LinkedList();
L3.insertNodeAtTail(5);
L3.insertNodeAtTail(6);

L3.reverseLinkedList();
console.log(L3);

// Generic case
var L4 = new LinkedList();
var testData = [5,6,7,8,5];
testData.forEach(el => L4.insertNodeAtTail(el));

L4.reverseLinkedList();
console.log(L4);

/*
Queue using two stacks javascript
*/
Solution
function Queue () {
  this.pushS = new Stack();
  this.popS = new Stack();
}

Queue.prototype.enqueue = function (val) {
  this.pushS.push(val);
};

Queue.prototype.dequeue = function () {
  var poping = this.popS;
  var pushing = this.pushS;

  if (poping.top) {
    var deq = poping.pop();
    console.log('Dequeing ' + deq + ' from stack.');
    return deq;
  }

  while (pushing.top) {
    poping.push(pushing.pop());
  }
};


var q1 = new Queue();
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);
q1.enqueue(6);
q1.enqueue(7);
q1.dequeue();
q1.dequeue();
q1.dequeue();
console.log('Current stat of the Queue is stored saved in the popS.');
console.log(q1);


/*Find the first common ancestor of two nodes in a binary tree*/
Solution

function commonAncestor(n1, n2) {
  var inOrderTra = inOrder(this);
  var postOrderTra = postOrder(this);

  var i1 = inOrderTra.indexOf(n1);
  var i2 = inOrderTra.indexOf(n2);
  var middleNodes = inOrderTra.splice(i1 + 1, i2);

  var map = middleNodes.map(function(i) {
    return {
      i: postOrderTra.indexOf(i)
    };
  });

  // Find the node with the highest index value
  return Object.keys(map).reduce(function(a, b) {
    return map[a] > map[b] ? a : b;
  });
}

/*
Returns an array containing all the elements in the in-order traversal.
@param {BT} root
*/
function inOrder(root) {
  ...
}

/*
Returns an array containing all the elements in the post-order traversal.
@param {BT} root
*/
function postOrder(root) {
  ...
}


/*Create a bar chart from json*/
Solution
'use strict';

function createGraph(data, startVal, endVal, intervalRange) {

  // calculate the number of buckets
  var dataPoints = Math.ceil((endVal - startVal) / intervalRange) + 1;

  // create a new array with necessary number of buckets and initialize them with 0
  var graphData = new Array(dataPoints).fill(0);
  var index;

  Object.keys(data).forEach(function(k) {
    index = Math.floor((k - startVal) / intervalRange);
    graphData[index] += data[k];
  });

  console.log(graphData);
}

var d = {
  25: 55,
  26: 45,
  27: 10,
  28: 20,
  30: 1,
  31: 1,
  32: 3,
  33: 10,
  60: 10,
  64: 5,
  65: 5
};

createGraph(d, 20, 65, 5);


/*Delete all the nodes from a binary tree*/
Solution
function deleteTree(node) {
    if (node == NULL) return;

    // Delete left, right subtrees
    deleteTree(node.left);
    deleteTree(node.right);

    deleteNode(node);
}

function deleteTree (root) {

  let temp = [];

  while (temp) {
    
    let node = temp.pop();

    if (node.left) temp.push(node.left);
    if (node.right) temp.push(node.right);
    
    deleteNode(node);
  }
}

/*
Traversing an array
*/

function traverse() {
  let names = ["Apple", "Microsoft", "Facebook", "Linkedin"],
    counter;

  for (counter = 0; counter < names.length; counter++) {
    console.log(names[counter]);
  }
};

traverse(); // Apple, Microsoft, Facebook, Linkedin

/*Functional programming*/
function traverse() {
  let names = ["Apple", "Microsoft", "Facebook", "Linkedin"];

  names.forEach(function(name) {
    console.log(name);
  });
};

traverse(); // Apple, Microsoft, Facebook, Linkedin