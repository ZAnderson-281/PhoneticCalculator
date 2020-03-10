/**
 *      Developer:  Zachary Anderson
 *      Date:       3/8/2020
 * 
 *      About:      This file contains every function and operation for validating the user input recieved. It checks a main set of
 *                  Rules first for the whole string then seperates the string at the first decimal point to applying a specific set
 *                  of rules for each section. 
 */

/*  ==================================================================================================================================
                                                    DECIMAL VALIDATION SECTION
    ==================================================================================================================================
*/
const floatValidation = floatPart => {
    if (typeof floatPart === 'undefined'){
        return true;
    }
    if (floatPart.length > 2){
        return ('Invalid length after decimal!');
    }
    if (isNaN(Number(floatPart))){
        return ('Invalid character after decimal!');
    }
    return true;
}

/*  ==================================================================================================================================
                                                    WHOLE NUMBER VALIDATION SECTION
    ==================================================================================================================================
*/
const intValidation = intPart => {
    // Split at comma
    const intSectionArray = intPart.split(',');

    let x = intSectionArray.map((section, index) => {
        if (section.length !== 3 && index !== 0) {
            return 1;
        };

        if (isNaN(Number(section))) {
            return 2;
        };

        return 0;
    });

    if (x.includes(1)){
        return 'Invalid comma placement!';
    };
    if (x.includes(2)){
        return 'Invalid character!';
    };

    return true;
}

/*  ==================================================================================================================================
                                                    GENERIC VALIDATION SECTION
    ==================================================================================================================================
*/
const regularValidation = num => {
    //check for undefined
    if (num === ""){
        return "No input found";
    }
    return true;
}

/*  ==================================================================================================================================
                                                        MAIN FUNCTION
    ==================================================================================================================================
*/
const checkInput = num => {
    let valid = regularValidation(num);
    if (valid !== true) { return valid; }

    // Split number at decimal 
    const intFloat = num.split('.');

    // Validate decimal section
    valid = floatValidation(intFloat[1]);
    if (valid !== true) { return valid; }

    // Validate whole number section
    valid = intValidation(intFloat[0]);
    if (valid !== true) { return valid; }

    return 0;
}

export {checkInput}