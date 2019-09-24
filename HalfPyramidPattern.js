// pattern in javascript

function displayHalfPyramid(height) {

    for (let i = 1; i <= height; i++) {
        let row = ``;

        for (let j = 1; j <= (i - 1); j++) {
            row += ` `;
        }

        for (let j = 1; j <= (height - i + 1); j++) {
            row += `*`;
        }

        console.log(row);
    }
}

displayHalfPyramid(5);

/*
*****
 ****
  ***
   **
    *           
  
  */