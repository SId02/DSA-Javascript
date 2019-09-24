//Merge sort es6

function mergesort(list) {
  var compare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x, y) {
    return x < y;
  };
  // breaking recursive call
  if (list.length <= 1) return list; 

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
 
  var iterator = list1.length > list2.length ? list1.length : list2.length; 

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
  } 


  if (index1 < list1.length) return result.concat(list1.slice(index1));
  if (index2 < list2.length) return result.concat(list2.slice(index2));
  return result;
}

console.log(mergesort([34, -2, 3, 5, -6, 1, 35])); // [ -6,-2,1,3,5,34,35]