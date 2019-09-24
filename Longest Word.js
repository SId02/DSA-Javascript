//Longest Word

function LongWord(str) {
    let str1 = str.split(' ');
    let Word = '';
    let longestWord = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i].length > longestWord) {
            longestWord = str1[i].length;
            Word = str1[i];
        }
    }
    return Word;
}
document.write("<p> Longest Word is:</p>" + LongWord("javascript is a scripting language"));
