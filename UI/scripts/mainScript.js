// ===== IMPORT STATEMENTS =====
import * as calculation from "./calculationScript.js"; // import all functions from calculationScript.js
import * as err from "./errorCatchs.js";

// ===== EVENT HANDLER =====
const addButtonOnclickEvent = () => {

    const btn = document.querySelector('.user-num-input input[type="button"]');
    const closeBtn = document.querySelector('.close');

    btn.addEventListener('click', () => {
        const input = document.querySelector('#numberInput').value;
        
        // Check for errors within the input
        const x = err.checkInput(input);
        
        // If there are no errors
        if (x === 0) {
            const outputSpan = document.querySelector('#phoneticOutput');
            const intFloatSplit = input.split('.');
            const phoneticOutputWhole = (calculation.convertInt(intFloatSplit[0]));
            let phoneticOutputDecimal = (calculation.convertFloat(intFloatSplit[1]))

            // Output to page
            outputSpan.innerHTML = `${phoneticOutputWhole} and ${phoneticOutputDecimal}/100 dollars`;

            return;
        }

        // display error   
        document.querySelector('.modal').style.visibility = 'visible';
        document.querySelector('#err-msg').innerHTML = x;
    });

    closeBtn.addEventListener('click', () => {document.querySelector('.modal').style.visibility = "hidden";});

}

// ===== MAIN FUNCTION =====
const mainFunction = () => {
    // Add the button event listener
    addButtonOnclickEvent();
}

// On page load
document.onload = mainFunction();