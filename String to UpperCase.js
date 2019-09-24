//String to UpperCase
function strCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

document.write("<p> String UpperCase  :</p>" + strCase("javascript a is scripting language"));

//String UpperCase : Javascript A Is Scripting Language