
				// Merge Two Array In Javascript using 2 Ways

//Method 1 using  concat

const arr1 = ['apple','banana','grapes'];
const arr2 = ['watermelon','Mango'];
const MergeArr = arr1.concat(arr2);
console.log(MergeArr);  // ['apple','banana','grapes','watermelon','Mango']

// Method 2  using Spread operator

const MergeArray = [...arr1,...arr2];
console.log(MergeArray);  // ['apple','banana','grapes','watermelon','Mango']

