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

// Count Non-Spaces Accept a string and return the number of non-space characters found in the string. For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

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
