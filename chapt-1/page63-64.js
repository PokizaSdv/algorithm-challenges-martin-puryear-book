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
