// function to add two numbers
function addition(num1, num2) {
   return num1 + num2

}

console.log(addition(3,5));

//function to change hours into seconds
function hoursIntoSeconds(hours) {
    return hours * 3600
}

console.log(hoursIntoSeconds(24));

// function to calculate perimeter of a rectangle

function calcPerimeter(length, width) {
    return (length * 2) + (width * 2)
}

console.log (calcPerimeter(2,9))

//function to calculate area of triangle

function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height
}

console.log(calcAreaOfTriangle(20,20))

function extendString(string) {
    return string + 'Frontend'
}

console.log(extendString('Apple'))

// function to return true if sum of two numbers is greater than 100

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100
    }

console.log(sumGreaterThan100(100,-50))

// function to return true if a number is less than or equal to zero, otherwise returning false.

function lessThanOrEqualToZero(num) {
    return num <= 0
}

console.log(lessThanOrEqualToZero(-2))

//function return the opposite boolean of the boolean given

function oppositeBoolean(bool) {
    return !bool
}

console.log(oppositeBoolean(false))

//function to return true if the element is NOT the number 0

function isNotZero(num) {
    return num !== 0
}

console.log(isNotZero(0))

//function to calculate the remainder when divided by eachother.

function calcRemainder(num1, num2) {
    return num1 % num2
}

console.log (calcRemainder(10, 9))

//function to return true if the remainder of two numbers is odd

function isOdd(num1) {
    return num1 % 2 !== 0
}

console.log(isOdd(3))

//function to take a number argument and return 1 if the number is even or -1 if the number is odd.

function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1
}

console.log(booleanInteger(6))

//Ternary Operator Syntax

// function ternary(variable) {
//     return variable % variable === 0 ? 1 : -1
// }


//Function to return true if user is logged in and subscribed

function isLoggedInAndSubscribed(loginStatus, subscriptionStatus) {
    return (loginStatus === 'LOGGED_IN' && subscriptionStatus === 'SUBSCRIBED') 
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))

//Function to return true if user is logged in or subscribed

function isLoggedInAndSubscribed(loginStatus, subscriptionStatus) {
    return (loginStatus === 'LOGGED_IN' || subscriptionStatus === 'SUBSCRIBED') 
}

console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'))

