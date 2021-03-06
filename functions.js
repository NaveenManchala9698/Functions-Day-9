/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
    let area = l1*l2
    console.log(area)
}


/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/*
let a = 4
let b = 3

function crazySum(a,b) {
    return(a + b);
}
let result = crazySum(a, b)


if (a === b) {
    console.log(result * 3)
} else
console.log(result)
*/


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/*
let a= 25
let b =19

function crazyDiff(a, b) {
    return(a -b)
}
let result = crazyDiff(a,b)

if (a > 19) {
    console.log(result * 3)
} else
console.log(result)
*/

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
/*
function boundary (n) {
    console.log("n")

if (n >= 20 && n<=100) {
    return true;
}
return false;
}
*/
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify (name = 'Strive') {
   console.log ("Strive", name)
}

strivify('school')
strivify('Developer')
strivify('Strive Coding')

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/


/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/*
let str = "Naveen"
function reverseString(str) {
    return str.split("").reverse().join();
}

console.log("Reversed String is:", reverseString(str));
*/

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
/*
function upperfirst(My, name, is, Naveen) {
    var separateWord = str.toLowercase().split("");

    for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUppercase()
    }
    return separateWord.join("")
}
console.log()
*/


/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString() {

}

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
  
function giveMeRandom(x) {

}

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
