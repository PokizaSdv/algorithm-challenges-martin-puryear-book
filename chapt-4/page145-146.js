// Parens Valid
// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.

function isValidParentheses(str) {
    const stack = [];
    for (const ele of str) {
        if (ele === "(") {
            stack.push(ele);
        } else if (ele === ")") {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

const input1 = "Y(3(p)p(3)r)s";
console.log(isValidParentheses(input1)); // Output: true

const input2 = "N(0(p)3";
console.log(isValidParentheses(input2)); // Output: false

const input3 = "N(0)t )0(k";
console.log(isValidParentheses(input3)); // Output: false

console.log(isValidParentheses("(()))"));
console.log(isValidParentheses("(())"));

//   -------------------------------------------------------

// Braces Valid:
//  Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false. Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation and capitalization) the letters are the same when reading from the back to the front.

function isValidSequence(str) {
    const stack = [];
    const opening = "{([";
    const closing = "})]";

    for (const ele of str) {
        if (opening.includes(ele)) {
            stack.push(ele);
        } else if (closing.includes(ele)) {
            const lastOpening = stack.pop();
            if (opening.indexOf(lastOpening) !== closing.indexOf(ele)) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
console.log("______________________");
console.log(isValidSequence("W(a{t}s[o(n{ c}o)m]e)h[e{r}e]!")); // Output: true
console.log(isValidSequence("D(i{a}l[ t]o)n{e")); // Output: false
console.log(isValidSequence("A(1)s[O (n]0{t) 0}k")); // Output: false

// ------------------------------------------------

// String: Is Palindrome:
//  Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log("--------------------");
console.log(isPalindrome("a x a"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Dud"));
console.log(isPalindrome("oho!"));

// Second: now do ignore white space (spaces, tabs, returns), capitalization and punctuation.

function isPalindrome2() {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let cleanedStr = "";
    for (const char of str) {
        if(letters.includes(char)) {
            cleanedStr += char
        }
    }
    let left = 0;
    let right = cleanedStr.length - 1;
    
    for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return false;
}
console.log("--------------------");
console.log(isPalindrome("a x a"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Dud"));
console.log(isPalindrome("oho!"));
