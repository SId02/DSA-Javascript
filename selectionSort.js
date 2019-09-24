//selectionSort

let selectionSort = function selectionSort(arr) {
  //Loop till the second last element
  for (let i = 0; i < arr.length - 1; i++) {
    //Loop after the i till the last element
    for (let j = i + 1; j < arr.length; j++) {
      //change < to > for sorting in descending order
     //Using ES6 Array Destructuring to swap the elements.
      if(arr[j] < arr[i]){
         [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
       }
      // if (arr[j] < arr[i]) {
      //   let temp = arr[i];
      //   arr[i] = arr[j];
      //   arr[j] = temp;}       
    }
  } 
  return arr;
};
console.log(selectionSort([1, 8, 2, 4, 5])); //[1, 2, 4, 5, 8]