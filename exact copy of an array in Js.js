//exact copy of an array in JavaScript


let arr1 = ["JS", "CSS", "HTML", "React js", "Angular"];

let cofArr1 = arr1.slice(); // old method

let cofArr2 = arr1 = [...arr1]; //using ES6

document.write(`Org Array : ${arr1} <br><br> `);
document.write(`Using Old Browser :  ${cofArr1} <br><br>`);
document.write(`Using ES6:  ${cofArr2} <br>`);