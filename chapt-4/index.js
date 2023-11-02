
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
const intToRoman = (int) => {
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
        while (int >= values[i]) {
            romans += romanNum[i];
            int -= values[i];
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

// Roman Numerals to Integer Sept 16, 2014 headline: “Ancient Computer Found in Roman Shipwreck”. Comprising 30 bronze gears, its wooden frame features 2000 characters. Given a string containing a Roman numeral representation of a positive integer, return the integer. Remember that III is 3, DCIX is 609 and MXDII is 1492.

// Puryear, Martin. Algorithm Challenges: The Dojo Collection (p. 144). Lulu.com. Kindle Edition.

const romanToInt = (roman) => {
    const dic = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const current = dic[roman[i]]; //DCIX => X ; => I  ;    => C      vvv => D
        if (current >= prevValue) {
            // 10 > 0    ; => 1 > 10 ?;   => 100 > 9;b=> 500 > 109
            result += current; // 0 + 10   ; => ?    ;  => 9 + 100;      => 109 + 500
        } else {
            // ?      ;    => 1 < 10;  => 9 > 100 ?   => ?
            result -= current; // ?     ;     => 10 - 1;   => ?          => ?
        }
        prevValue = current; // prevValue = 10;  => prevValue = 9; => prevValue = 109  => prevValue = 609
    }

    return result;
};

console.log("_______________");
console.log(romanToInt("III"));
console.log(romanToInt("DCIX"));

// Challenge answered: console.log(1 + 2 + "3" + "4" + 5 + 6) will output "33456". Num+num is a num, but num+str or str+num is a str: 1+2==3. 3+"3"=="33". "334"+5=="3345".
// Puryear, Martin. Algorithm Challenges: The Dojo Collection (p. 144). Lulu.com. Kindle Edition.

// String: Reverse Implement reverseString(str) that, given string, returns that string with characters reversed. Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

// Puryear, Martin. Algorithm Challenges: The Dojo Collection (p. 143). Lulu.com. Kindle Edition.
const reverseString = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

//  Remove Even-Length Strings Build a standalone function to remove strings of even lengths from a given array. For array containing ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], change that same array to ["Nope!","Its","Chris","."].
// Puryear, Martin. Algorithm Challenges: The Dojo Collection (p. 144). Lulu.com. Kindle Edition.

function removeEvenLengthStr(arr) {
    return arr.filter((str) => str.length % 2 !== 0);
}
let array = [
    "Nope!",
    "Its",
    "Kris",
    "starting",
    "with",
    "K!",
    "(instead",
    "of",
    "Chris",
    "with",
    "C)",
    "."
];
console.log(removeEvenLengthStr(array));
