//Reverse String

function reverseString(str) {
    let revString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
    }
    return revString;
}
document.write("<p>Reverse String :</p>" + reverseString("javascript"));

//Reverse String : tpircsavaj