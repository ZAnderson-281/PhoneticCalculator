// ===== IMPORT STATEMENTS =====
let calculation = require("./calculationScript.js"); // import all functions from calculationScript.js
let err = require("./errorCatchs.js");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })


const convertNumber = input => {
    // Check for errors within the input
    const x = err.checkInput(input);
        
    // If there are no errors
    if (x === 0) {
        const intFloatSplit = input.split('.');
        const phoneticOutputWhole = (calculation.convertInt(intFloatSplit[0]));
        let phoneticOutputDecimal = (calculation.convertFloat(intFloatSplit[1]))
        // Output to page
        const output = `${phoneticOutputWhole} and ${phoneticOutputDecimal}/100 dollars`;
        console.log(output);
        return;
    }

    // display error   
    console.error("ERROR " + x);
}

// ===== MAIN FUNCTION =====
const mainFunction = () => {
    readline.question(`Enter a number (Example: 100,000,000,000): `, input => {
        convertNumber(input);
        readline.close()
    })
}

// On page load

mainFunction();