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

console.log(isValidParentheses("(()))"))
console.log(isValidParentheses("(())"))

//   -------------------------------------------------------


