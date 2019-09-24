//Singly Linked Lists in JavaScript

class Node {
    constructor(metadata) {
        this.data = metadata;
        this.link = null;
    }
}

class SinglyList {
    constructor() {
        this.length = 0;
        this.firstNode = null;
    }
    add(metadata) {
        // lets make a node!

        const node = new Node(metadata);
        let currentNode = this.firstNode;

        // Do we have an empty list right now?
        if (!currentNode) {
            this.firstNode = node;
            // increment our list count
            this.length = this.length + 1;

            return node;
        }

        // Do we already have nodes in the list?

        while (currentNode.link) {
            currentNode = currentNode.link
        }

        currentNode.link = node;

        // increment our list count
        this.length = this.length + 1;

        return node;
    }
    remove(index) {

        let currentNode = this.firstNode;
        const length = this.length;
        let count = 0;

        // we need to validate our params

        if (index < 0 || length === 0 || index > length) {
            throw new Error('Invalid list conditions: invalid index supplied');
        }

        // are we removing the first node?

        if (index === 0) {
            this.firstNode = currentNode.link;

            const deletedNode = currentNode;
            // get rid of the current node
            currentNode = null;

            this.length = this.length - 1;

            return deletedNode;
        }

        let nodePrior;
        let nodeToDelete;

        // are we removing any other node?
        while (count < index) {
            nodePrior = currentNode;
            nodeToDelete = currentNode.link;
            count = count + 1;
        }

        nodePrior.link = nodeToDelete.link;

        this.length = this.length - 1;

        return nodeToDelete;
    }
    getLength() {
        return this.length;
    }

    incrementLength() {
        this.length = this.length + 1;
        return;
    }

    decrementLength() {
        this.length = this.length - 1;
        return;
    }

    findNode(index) {
        let currentNode = this.firstNode;
        const length = this.getLength();
        let count = 0;

        // is this a valid index
        if (length === 0 || index > length) {
            throw new Error('Invalid node');
        }

        while (count < index) {
            currentNode = currentNode.link;
            count = count + 1;
        }

        return currentNode;
    }
}


const list = new SinglyList();

// lets add something

list.add({ action: 'You see a shiny object' });

list.add({ action: 'A creature jumps at you!' });

// lets get the length

function printContent(content) {
    // create a new div element 
    const newDiv = document.createElement("div");
    // and give it some content 
    const newContent = document.createTextNode(content);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("root");
    document.body.insertBefore(newDiv, currentDiv);
}

printContent(`List Length ${list.getLength()}`);

// find a node
const node = list.findNode(0);

printContent(node.data.action);

const anotherNode = list.findNode(1);

printContent(anotherNode.data.action);

// remove a node
list.remove(0);

printContent(`List Length ${list.getLength()}`);

/* 
op

List Length 2
You see a shiny object
A creature jumps at you!
List Length 1

*/

//Arrays - Find missing numbers in a Sequence

var numArray = [0189459, 0189460, 0189461, 0189463, 0189465];
var mia = [];

for (var i = 1; i < numArray.length; i++) {
    if (numArray[i] - numArray[i - 1] != 1) {
        var x = numArray[i] - numArray[i - 1];
        var j = 1;
        while (j < x) {
            mia.push(numArray[i - 1] + j);
            j++;
        }
    }
}
alert(mia) // returns [0189462, 0189464]

//Here's a neater version using .reduce
var numArray = [0189459, 0189460, 0189461, 0189463, 0189466];
var mia = numArray.reduce(function(acc, cur, ind, arr) {
    var diff = cur - arr[ind - 1];
    if (diff > 1) {
        var i = 1;
        while (i < diff) {
            acc.push(arr[ind - 1] + i);
            i++;
        }
    }
    return acc;
}, []);
console.log(mia);

//Singly Linked List

function Node(value) {
    this.value = value;
    this.next = undefined;
}

function SLinkedList() {
    var head = undefined;
    var length = 0;

    return {
        insert: function(item) {
            if (!item) return;

            var node = new Node(item);

            if (head) {
                node.next = head;
            }

            head = node;
            length++;
        },
        delete: function(value) {
            var curr = head;

            if (head.value === value) {
                head = head.next;
                return;
            }

            while (curr) {
                if (curr.next) {
                    var next = curr.next;

                    if (next.value === value) {
                        curr.next = next.next;
                        length--;
                        break;
                    }
                }

                curr = curr.next;
            }
        },
        search: function(value) {
            var curr = head;
            var found = undefined;

            while (curr) {
                if (curr.value === value) {
                    found = curr;
                    break;
                }

                curr = curr.next;
            }

            return found;
        },
        get size() {
            return length;
        },
        print: function() {
            var result = [];

            var curr = head;
            while (curr) {
                result.push(curr.value);

                curr = curr.next;
            }

            return result;
        }
    }
}

//Doubly Linked List


function Node(value) {
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
}

function DLinkedList() {
    var head = undefined;
    var tail = undefined;
    var length = 0;

    return {
        insert: function(item) {
            if (!item) return;

            var node = new Node(item);

            if (head) {
                node.next = head;
                head.prev = node;
            }

            head = node;

            if (!tail) {
                tail = node;
            }

            length++;
        },
        delete: function(value) {
            var curr = head; //Start from head of the list

            //Iterate through list to find the matching node
            while (curr) {
                if (curr.value === value) {
                    var prev = curr.prev,
                        next = curr.next;

                    //Update the pointers
                    if (prev) {
                        prev.next = next;
                    } else {
                        head = next; //If matched node is the head
                    }

                    if (next) {
                        next.prev = prev;
                    } else {
                        tail = prev; //If matched node is the tail
                    }

                    length--;
                    break;
                }

                curr = curr.next;
            }
        },
        search: function(value) {
            var curr = head;
            var found = undefined;

            while (curr) {
                if (curr.value === value) {
                    found = curr;
                    break;
                }

                curr = curr.next;
            }

            return found;
        },
        get size() {
            return length;
        },
        print: function() {
            var result = [];

            var curr = head;
            while (curr) {
                result.push(curr.value);

                curr = curr.next;
            }

            return result;
        }
    }
}


//Merge sort es6

function mergesort(list, compare = (x, y) => { return x < y }) {

    // breaking recursive call
    if (list.length <= 1) return list;

    // ES6 flag --harmony_destructuring needed when run in Node 5.0.0
    var { leftHalf, rigthHalf } = splitList(list);

    // Recursive call.
    // Passing compare function to recursive calls to prevent the creation of unnecessary
    // functions on each call.
    return jointLists(mergesort(leftHalf, compare), mergesort(rigthHalf, compare), compare);
}

function splitList(list) {
    if (list.length == 0) return { leftHalf: [], rigthHalf: [] };
    if (list.length == 1) return { leftHalf: list, rigthHalf: [] };
    var index = Math.floor(list.length / 2);
    return { leftHalf: list.slice(0, index), rigthHalf: list.slice(index) };
}

function jointLists(list1, list2, compare) {

    // getting the biggest array
    var iterator = list1.length > list2.length ? list1.length : list2.length;

    // defining auxiliar variables
    var [result, index1, index2] = [
        [], 0, 0
    ];

    // sortering previously ordered arrays
    while (true) {
        if (compare(list1[index1], list2[index2])) {
            result.push(list1[index1]);
            index1++;
        } else {
            result.push(list2[index2]);
            index2++;
        }
        if (index1 == list1.length || index2 == list2.length) break;
    }

    // some of the array still have elements that are not listed on the result arrays,
    // since this elements have a biggest value (according to the compare function)
    // we can just push this elements at the very end of the result
    if (index1 < list1.length) return result.concat(list1.slice(index1));
    if (index2 < list2.length) return result.concat(list2.slice(index2));
    return result;
}

console.log(mergesort([34, -2, 3, 5, -6, 1, 35]));
//undefined
//Array(7) [ -6, -2, 1, 3, 5, 34, 35 ]


//Merge sort


var unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];

function merge(leftArr, rightArr) {
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0]);
            leftArr = leftArr.slice(1)
        } else {
            sortedArr.push(rightArr[0]);
            rightArr = rightArr.slice(1)
        }
    }
    while (leftArr.length) sortedArr.push(leftArr.shift());
    while (rightArr.length) sortedArr.push(rightArr.shift());
    return sortedArr;
}

function mergesort(arr) {
    if (arr.length < 2) { return arr; } else {
        var midpoint = parseInt(arr.length / 2);
        var leftArr = arr.slice(0, midpoint);
        var rightArr = arr.slice(midpoint, arr.length);
        return merge(mergesort(leftArr), mergesort(rightArr));
    }
}
console.log('This should be the sorted array!');
console.log(mergesort(unsortedArr));