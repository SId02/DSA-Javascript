// Insertion Sort ES6


const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37];


const insertion = arr => {
    arr.forEach((item, i) => {
        let num = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > num; j--) {
            arr[j + 1] = arr[j];
        };
        arr[j + 1] = num;
    });

    return arr;
};

console.log(insertion(unsortedArr));

//  (20) [1, 8, 9, 11, 13, 15, 16, 17, 20, 27, 28, 30, 31, 35, 36, 37, 41, 42, 43, 48]
