// Countdown: Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

const countdown = (number) => {
    let result = [];
    while (number >= 0) {
        result.push(number);
        number--;
    }
    return result;
};
console.log(countdown(5));
// const howLong = countdown(5);
// console.log(howLong.lenght)
console.log(countdown(5).length);

// ------------------------------------

// Print and Return Your function will receive an array with two numbers. Print the first value, and return the second.

const printAndReturn = (arr) => {
    console.log(arr[0]);
    return arr[1];
};
console.log(printAndReturn([1, 2]));

// First Plus Length: Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr) {
    return arr[0] + arr.length;
}
console.log(firstPlusLength([1, 2, 3]));
console.log(firstPlusLength(["what?", 2, 3]));
console.log(firstPlusLength([false, 2, 3]));

// -------------------------------------------

// Values Greater than Second For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

const greaterThanSecond = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i]);
            result.push(arr[i]);
        }
    }
    return result.length;
};
console.log(greaterThanSecond([1, 3, 5, 7, 9, 13]));
console.log("-------------------------------------");

// ---------------------------------------------------

// Values Greater than Second, Generalized: Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

const greaterThanSecondGeneralized = (arr) => {
    if (arr.length === 1) {
        console.log("Array must have at least two elements.");
        return [];
    }
    let secondValue = arr[1];
    let result = arr.filter((value) => value > secondValue);
    let count = result.length;
    console.log("Number of values greater than the second value:", count);
    return result;
};

greaterThanSecondGeneralized([1, 2, 3, 4, 5, 6]);
greaterThanSecondGeneralized([10, 20, 30, 40]);
greaterThanSecondGeneralized([1, 9, 7, 45, 68, 3, 5]);
console.log("--------------------------------");

// ---------------------------------------

// This Length, That Value: Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
// 3, 5 => [5, 5, 5]
const createArray = (num1, num2) => {
    let arr = [];
    if (num1 === num2) {
        console.log("Jinx");
    } else {
        for (let i = 0; i < num1; i++) {
            arr.push(num2);
        }
    }
    return arr;
};
console.log(createArray(3, 5));
console.log(createArray(5, 7));
console.log("-------------------------");

// ---------------------------------------------

// Fit the First Value: Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

const fitFirstValue = (arr) => {
    if (arr[0] === arr.length) {
        console.log("Just right!");
    } else if (arr[0] > arr.length) {
        console.log("Too Big!");
    } else {
        console.log("Too small!");
    }
};
fitFirstValue([5, 1, 2, 3, 4]);
fitFirstValue([7, 1, 2, 3, 4]);
fitFirstValue([2, 1, 2, 3, 4]);
console.log("-----------------------------");
