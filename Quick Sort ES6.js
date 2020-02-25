//Quick Sort ES6

const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37];


const pivot = (arr, start = 0, end = arr.length + 1) => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

    let pivot = arr[start],
        pointer = start;

    for (let i = start; i < arr.length; i++) {
        if (arr[i] < pivot) {
            pointer++;
            swap(arr, pointer, i);
        }
    };
    swap(arr, start, pointer);

    return pointer;
}


const quickSort = (arr, start = 0, end = arr.length) => {
    let pivotIndex = pivot(arr, start, end);

    if (start >= end) return arr;
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);

    return arr;
};

console.log(quickSort(unsortedArr));


//  (20) [1, 8, 9, 11, 13, 15, 16, 17, 20, 27, 28, 30, 31, 35, 36, 37, 41, 42, 43, 48]
