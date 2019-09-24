//Reverse Integer


function reverseInteger(num) {
    let revInteger = num.toString().split('').reverse().join('');
    return parseInt(revInteger) * Math.sign(num);
}
document.write("<p>Reverse Integer:</p>" + reverseInteger(21));

//Reverse Integer: 12