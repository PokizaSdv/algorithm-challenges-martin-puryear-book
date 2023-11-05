// Biggie Size Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

const makeItBig = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr[i] = "big";
        }
    }
    return arr;
};

console.log(makeItBig([-1, 3, 5, -5]));

// Print Low, Return High Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

const printLow = (arr) => {
    let highest = arr[0];
    let lowest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    console.log(lowest);
    return highest;
};
console.log(printLow([-4, 8, 12, 80, -5]));

//  Print One, Return Another Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.

const printOneReturnAnother = (arr) => {
    let secondLast = arr[arr.length - 2];
    console.log(secondLast);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return arr[i];
        }
    }
};
console.log(printOneReturnAnother([2, 3, 6, 8, 29, 7]));

//  Double Vision Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

const double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
};

console.log(double([1, 2, 3]));

// Count Positives Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

const countPositives = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
        arr[arr.length - 1] = count;
    }
    return arr;
};

console.log(countPositives([-1, 1, 1, 1]));
console.log("--------------------");

// Evens and Odds: Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evenAndOdds(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
            return "That's odd!";
        } else if (
            arr[i] % 2 === 0 &&
            arr[i + 1] % 2 === 0 &&
            arr[i + 2] % 2 === 0
        ) {
            return "Even more so!";
        }
        return false;
    }
}

console.log(evenAndOdds([1, 5, 3, 4]));
console.log(evenAndOdds([2, 4, 6, 3]));
console.log(evenAndOdds([1, 2, 3, 4]));
console.log("---------------------------");

// Increment the Seconds: Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

const incrementOdd = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
};
console.log(incrementOdd([1, 2, 3, 4, 5, 6]));
