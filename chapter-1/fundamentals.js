// Setting and Swapping: Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

var myNumber = 42;
var myName = "Pokiza";
var temp = myNumber;
myNumber = myName;
myName = temp;

// console.log(myNumber);
// console.log(myName);

// Print -52 to 1066: Print integers from -52 to 1066 using a FOR loop.
for (var i = -52; i <= 1066; i++) {
    // console.log(i);
}

// Don’t Worry, Be Happy: Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(n) {
    var count = 0;
    while (count < n) {
        // console.log("good morning");
        count++;
    }
}
beCheerful(98);

// Multiples of Three – but Not All: Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

var num = -300;
while (num <= 0) {
    if (num % 3 === 0 && num !== -3 && num !== -6) {
        // console.log(num);
    }
    num++;
}

for (let i = -300; i <= 0; i += 3) {
    if (i === -3 || i === -6) {
        continue;
    }
    // console.log(i);
}

// Printing Integers with While: Print integers from 2000 to 5280, using a WHILE.

var num = 2000;
while (num <= 5280) {
    // console.log(num);
    num++;
}

// You Say It’s Your Birthday: If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."

function birthMonthDayChecker(num1, num2) {
    if (num1 === 10 && num2 === 17) {
        console.log("How Did You know?");
    } else {
        console.log("Just another day...");
    }
}
birthMonthDayChecker(10, 17);

// Leap Year: Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
//  my version:
function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    if (year % 400 === 0) {
        return true;
    }
    return false;
}
// Chatgpt version:
// function isLeapYear(year) {
//     if (year % 4 === 0) {
//       if (year % 100 === 0) {
//         if (year % 400 === 0) {
//           return true;
//         } else {
//           return false;
//         }
//       } else {
//         return true;
//       }
//     } else {
//       return false;
//     }
//   }
// console.log(leapYear(2000));
// console.log(leapYear(2100));
// console.log(leapYear(2004));
// console.log(leapYear(1800));
// console.log(leapYear(1900));

// Print and Count Print all integer: multiples of 5, from 512 to 4096. Afterward, also log how many there were.
let count = 0;
for (let i = 512; i < 4096; i++) {
    if (i % 5 === 0) {
        // console.log(i);
        count++;
    }
}
// console.log("Total count:", count);

// Multiples of Six Print multiples of 6 up to 60,000, using a WHILE.

let a = 6;
while (a <= 60000) {
    if (a % 6 === 0) {
        a++;
    }
}
console.log(a);
