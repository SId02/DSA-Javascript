//FizzBuzz Using Parameter

function fBuz(len, fizzNo, buzzNo) {
    let op;
    for (let i = 1; i <= len; i++) {
        op = '';
        if (i % fizzNo === 0) {
            op += 'Fizz';
        }
        if (i % buzzNo === 0) {
            op += 'Buzz';
        }
        if (i % fizzNo !== 0 && i % buzzNo !== 0) {
            op += i;
        }
        console.log(op);
    }
}
fBuz(15, 3, 5);

/*
1
2
"Fizz"
4
"Buzz"
"Fizz"
7
8
"Fizz"
"Buzz"
11
"Fizz"
13
14
"FizzBuzz"
 */