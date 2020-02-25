// Selection Sort ES6

const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37];

const selection = arr => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

    arr.forEach((item, i) => {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        };
        swap(arr, i, min);
    });

    return arr;
};

console.log(selection(unsortedArr));

//  (20) [1, 8, 9, 11, 13, 15, 16, 17, 20, 27, 28, 30, 31, 35, 36, 37, 41, 42, 43, 48]
