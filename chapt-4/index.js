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
