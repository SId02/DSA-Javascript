/* Traversing an array */

function traverse() {
  let names = ["Angular","JS","Reactjs","Vue js"],
    count;

  for (count = 0; count < names.length; count++) {
    console.log(names[count]);
  }
};

traverse();

function traverseES6() {
  let names = ["Angular","JS","Reactjs","Vue js"];

  names.forEach(function(name) {
    console.log("ES6" +name);
  });
};

traverseES6();