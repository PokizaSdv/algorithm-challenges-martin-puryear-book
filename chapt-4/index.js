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

// //  Integer to Roman Numerals Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.

// const intToRoman = (num) => {
//     let romans = "";
//     const dic = {
//       1000: "M",
//       900: "CM",
//       500: "D",
//       400: "CD",
//       100: "C",
//       90: "XC",
//       50: "L",
//       40: "XL",
//       10: "X",
//       9: "IX",
//       5: "V",
//       4: "IV",
//       1: "I"
//     };

//     for (let key in dic) {
//       while (num >= key) {
//         romans += dic[key];
//         num -= key;
//       }
//     }

//     return romans;
//   };
const intToRoman = (num) => {
    const romanNum = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];

    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romans = "";
    for (let i = 0; i < romanNum.length; i++) {
        while (num >= values[i]) {
            romans += romanNum[i];
            num -= values[i];
        }
    }
    return romans;
};

console.log("_____________");
console.log(intToRoman(349));
console.log(intToRoman(4));
console.log(intToRoman(21));
console.log(intToRoman(444));
console.log(intToRoman(1));
