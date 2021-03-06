//  Merge sort ES6
 
const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37];


const merge = (arr1, arr2) => {
    let sorted = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
        else sorted.push(arr2.shift());
    };

    return sorted.concat(arr1.slice().concat(arr2.slice()));
};

console.log(merge([2, 5, 10, 57], [9, 12, 13]));

const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

console.log(mergeSort(unsortedArr));

//  (20) [1, 8, 9, 11, 13, 15, 16, 17, 20, 27, 28, 30, 31, 35, 36, 37, 41, 42, 43, 48]
