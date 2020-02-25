// Radix Sort ES6


const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37];


//1
const getNum = (num, index) => {
    const strNum = String(num);
    let end = strNum.length - 1;
    const foundNum = strNum[end - index];

    if (foundNum === undefined) return 0;
    else return foundNum;
};

console.log(getNum(4353, 2));

//2

const largestNum = arr => {
    let largest = "0";

    arr.forEach(num => {
        const strNum = String(num);

        if (strNum.length > largest.length) largest = strNum;
    });

    return largest.length;
};

//3

const radixSort = arr => {
    let maxLength = largestNum(arr);

    for (let i = 0; i < maxLength; i++) {
        let buckets = Array.from({
            length: 10
        }, () => []);

        for (let j = 0; j < arr.length; j++) {
            let num = getNum(arr[j], i);

            if (num !== undefined) buckets[num].push(arr[j]);
        };
        arr = buckets.flat();
    };
    return arr;
};


console.log(radixSort(unsortedArr));

//  (20) [1, 8, 9, 11, 13, 15, 16, 17, 20, 27, 28, 30, 31, 35, 36, 37, 41, 42, 43, 48]