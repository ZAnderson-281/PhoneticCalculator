/**
 *      Developer:  Zachary Anderson
 *      Date:       3/8/2020
 * 
 *      About:      This file contains every function used to convert the numbers into their corrosponding words. The file contains
 *                  to exported functions, one is a function to convert the whole number side of the input and the other is to 
 *                  tidy up and convert the decimal side of the number.
 */


const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


/*  ==================================================================================================================================
                                            WHOLE NUMBER CONVERSION FUNCTIONS
    ==================================================================================================================================
*/

// CONVERT numberToConvert STARTING AT MILLIONS AND WORK WAY DOWN

const conTrill = numberToConvert => {

    //divide the number by 1mill and pass the remainder to the thousands convert
    //else just pass to the thousands
    if (numberToConvert >= 1000000000000) {
        return conBill(Math.floor(numberToConvert / 1000000000000)) + " trillion " + conBill(numberToConvert % 1000000000000);
    } 
    else {
        return conBill(numberToConvert);
    }
}

const conBill = numberToConvert => {

    //divide the number by 1mill and pass the remainder to the thousands convert
    //else just pass to the thousands
    if (numberToConvert >= 1000000000) {
        return conMill(Math.floor(numberToConvert / 1000000000)) + " billion " + conMill(numberToConvert % 1000000000);
    } 
    else {
        return conMill(numberToConvert);
    }
}

const conMill = numberToConvert => {

    //divide the number by 1mill and pass the remainder to the thousands convert
    //else just pass to the thousands
    if (numberToConvert >= 1000000) {
        return conThous(Math.floor(numberToConvert / 1000000)) + " million " + conThous(numberToConvert % 1000000);
    } 
    else {
        return conThous(numberToConvert);
    }
}

const conThous = numberToConvert => {
    //divide the number by 1thousand and pass the remainder to the hundreds convert
    //else just pass to the hundreds place
    if (numberToConvert >= 1000) {
      return conHund(Math.floor(numberToConvert / 1000)) + " thousand " + conHund(numberToConvert % 1000);
    } 
    else {
      return conHund(numberToConvert);
    }
}

const conHund = numberToConvert => {
    // divide the number by 100 and pass the remainder to the tens convert
    // else just pass to the tens place
    if (numberToConvert > 99) {
        return ones[Math.floor(numberToConvert / 100)] + " hundred " + conTen(numberToConvert % 100);
    } 
    else {
        return conTen(numberToConvert);
    }
}

const conTen = numberToConvert => {

    // if a ones place
    if (numberToConvert < 10) {
        return ones[numberToConvert];
    }
    // if a teen value 
    else if (numberToConvert >= 10 && numberToConvert < 20) {
        return teens[numberToConvert - 10];
    } 
    // if anything greater than 19
    else {
        return tens[Math.floor(numberToConvert / 10)] + " " + ones[numberToConvert % 10];
    }

}

/*  ==================================================================================================================================
                                                MAIN CONVERSION FUNCTION (WHOLE NUMBER SECTION)
    ==================================================================================================================================
*/
// Int conversion function
const convertInt = numberToConvert => {

    // Global replace all commas
    numberToConvert = numberToConvert.replace(/,/g,'');

    // console.log(numberToConvert);

    // If numberToConvertber is greater than zero convert, else return zero
    if (numberToConvert == 0){
         return "zero";
    }
    else {
        return conTrill(numberToConvert);
    }
}

/*  ==================================================================================================================================
                                                MAIN CONVERSION FUNCTION (DECIMAL SECTION)
    ==================================================================================================================================
*/
const convertFloat = floatToConvert => {
    if (typeof floatToConvert === 'undefined'){
        return '00';
    }
    if (floatToConvert.length < 2){
        return floatToConvert+0;
    }
    return floatToConvert;
}


exports.convertInt = convertInt;
exports.convertFloat = convertFloat;
