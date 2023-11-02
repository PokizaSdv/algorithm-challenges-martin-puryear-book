// Remove Blanks 
// Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string " Pl   ayTha  tF   u  nkyM  usi    c  ", return "PlayThatFunkyMusic".

function removeBlanks(str) {
    let result = "";
    for (const char of str) {
        if (char !== " ") {
            result += char;
        }
    }
    return result;
}

console.log(removeBlanks(" Pl   ayTha  tF   u  nkyM  usi   c  "));

// or
// function removeBlanks(str) {
//     return str.replace(/\s/g, "");
// }
// let string = " Pl   ayTha  tF   u  nkyM  usi    c ";
// console.log(removeBlanks(string));

// -----------------------------------------

// String: Get Digits:
//  Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
// parseInt("7") => 7
//  parseInt("7.5") => 7
// parseInt("a") => Nan  
function getDigits(str) {
    let digits = "";
    for (const char of str) {
        if (!isNaN(parseInt(char))) {
            digits += char;
        }
    }
    return parseInt(digits);
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// --------------------------------------------
// Acronyms:
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch  -  gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

const caplitalizeFirst = (str) => {
    let words = str.split(" ");
    let capitalized = [];
    for (const word of words) {
        capitalized.push(word[0].toUpperCase());
    }
    return capitalized.join("");
};
console.log(caplitalizeFirst("there's no free lunch - gotta pay yer way"));

// -------------------------------------------------

// Count Non-Spaces:
//  Accept a string and return the number of non-space characters found in the string. For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

const countLetters = (str) => {
    let counter = 0;
    for (const char of str) {
        if (char !== " ") {
            counter++;
        }
    }
    return counter;
};
console.log(countLetters("Honey pie, you are driving me crazy"));

// ---------------------------------------------------
// Remove Shorter Strings Given a string array and value (length), remove any strings shorter than length from the array.

const shorterString = (arr, length) => {
    // let result = [];
    // for (const str of arr) {
    //     if (str.length >= length) {
    //         result.push(str);
    //     }
    // }
    // return result;

    return arr.filter((str) => str.length >= length);
};
console.log(shorterString(["abc", "defg", "a", "xy"], 3));