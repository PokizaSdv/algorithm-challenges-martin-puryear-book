// Remove Blanks Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string " Pl   ayTha  tF   u  nkyM  usi    c  ", return "PlayThatFunkyMusic".

// Puryear, Martin. Algorithm Challenges: The Dojo Collection (p. 140). Lulu.com. Kindle Edition.

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


