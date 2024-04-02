// link to html to run with script tag, can have multiple scripts, order matters
console.log("HELLO is anyone there?")

console.log("HELLO is anyone there?")
console.log("HELLO is anyone there?")
console.log("HELLO is anyone there?")
console.log("HELLO is anyone there?")
console.log("HELLO is anyone there?")

// html go live then inspect Console on page



// single line comment

/* multi 
line 
comment
*/

// Python vs JS DataTypes
/*

Strings - SAME
Booleans - SAME, no cap letters
Int/float - just numeric or number type

*/

// Syntax - CamelCase is standard for JS but can use snake_case

//  must separate elements with semicolons bc computer omits spaces

myVar = 1120; myMy = 992; myMe = 299

//  we want to be more specific about variable declaration/definition

var x = 876;

console.log(x);

var teach = "Brandt";

console.log(teach);
console.log(typeof teach);

var bool1 = true;
var bool2 = false;

console.log(bool1, bool2);
console.log(typeof bool2)


//  lists and dictionaries
//  arrays and objects (dicts in Python)


// array
var myArr = [20, 10, 'a string', true, ['nested'], 'last']

//  to access el in list by index

console.log(myArr[0])

console.log(myArr)

// Object (dictionary)

var myObject = {'aKey': "a Value"};
console.log(myObject)

//  access el in obj

console.log(myObject['aKey']) // ALWAYS WORKS

//  or use dot notation below

console.log(myObject.aKey) // usually works

console.log(unknownVar) // errors - hoisted or undefined var
var unknownVar; // but now undefined
unknownVar = 987654;
console.log(unknownVar)

// grabs all variables in script first then runs through entire block
// line 80-84 WRONG WAY

//ECMA SCRIPT - GOVERNING RULES OF JS
// JS ES6 - STANDARDIZED JS STARTED IN 2015
// GOOGLE W3 SCHOOLS


// LET/CONST KEYWORDS TO DEFINE VARS - RIGHT WAY

//let
    // allows for redefinition of value but not redeclaration

let myVar2 = 45;

myVar2 += 34
console.log(myVar2);

//const
    //doesnt allow for either

const myVar1 = 56;
// myVar += 33 - this cannot be processed bc of const


//MATH
// same as python

// add +
let myNums = 987;
let myNums1 = 50;
let myNums2 = 33;
let myNums3 = -14;

console.log(myNums + myNums2)

//subtract -

console.log(myNums - myNums3)


//mult *
console.log(myNums * myNums2);

//divide /

console.log(myNums / myNums2);


//exponent **
console.log(2 ** 2);

// modulo %

/* ROUNDING; import Math

Math.round(<value>)
Math.ceil(<value>)
Math.floor(<value>)
*/

let pie = 3.141512
console.log(Math.round(pie));
console.log(Math.floor(pie));
console.log(Math.ceil(pie));

//toFixed - out of place; very common
// .toFixed(2) tells the amount of numbers we want
console.log(pie.toFixed(2))
console.log(pie)

console.log(Math.round(pie*100)/100) // workaround for out of place


//jswtf video https://www.youtube.com/watch?v=et8xNAc2ic8

console.log('JAVASCRIPT WTF THINGS: \n')

let test = 4.56 + '4'
console.log(test);
console.log(typeof test);

let test2 = false + '4'
console.log(test2);
console.log(typeof test2)

let test3 = 3 + false;
console.log(test3);
console.log(typeof test3);

let test4 = 3 + true;
console.log(test4);
console.log(typeof test4)

let test5 = [] + undefined;
console.log(test5);
console.log(typeof test5);

let gwen = 'b'
//NaN not a number

let test6 = [] + false;
console.log(test6);
console.log(typeof test6);

let test7 = [] + 45;
console.log(test7);
console.log(typeof test7)

// functions
// syntax - variety of ways to define func bc they do not deprecate old ways

//most straight forward syntax:

// function <nameofFunction>(parameters){code to execute}

function hiWorld(){return "Hello JS World!"}
console.log(hiWorld)
console.log(hiWorld())

// THE JS VERSION OF THE PYTHON F STRING IS WITH BACKTICKS
// DISPLAYED BELOW - under esc key

let hiWorld2 = function(name){return `Hello ${name}`}

console.log(hiWorld2('Buhay'))

// ANOTHER WAY - ARROW FUNCTION
//basic syntax   (parameter) => {return}

let hiWorld3 = (n) => {return `Hello and welcome ${n}`}

console.log(hiWorld3('Adrian'))

// self invoking functions

console.log(((n)=>{return `Hello and welcome ${n}`})('Rhett'))

//conditionals
// if (conditional){code block}
// else if (conditional){code block}
// else {code block}

let age = 19;

if (age < 18){console.log("You a kid")}
else if (age > 64){console.log("Senior")}
else {console.log("Adult")}

//comparison operators - mostly same as python
// < > <= >= but 
// and &&
// or ||
// equality signs - more options

// = is assignment, == is value equality, === type and value equality

console.log('4' == 4) // true since same value
console.log('4' === 4) // false since not the same type

let color = "blue";
if (color === "blue" || color === "black"){console.log("The OR statement fired!")}
else if(color === "blue" && color === "black"){console.log("The AND statement not gunna")}


// increment or decrement by 1, use ++ or --


//LOOPS
//THE STANDARD JS LOOP:
// pretty close to index loop in python

/*
python:
for i in range(len(iterable))

js:
for (let i = 0; i<iterable.length; i++){code block}

*/

let itsString = 'xyzabcde'

for (let i = 0; i < itsString.length; i++){console.log(itsString[i])}

// for i in range(len(itsString)):
//      print(itsString[i])

//NESTED LOOP
for (let i = 0; i < itsString.length; i++)
    for (let j = 1; j < 7; j++)

{console.log(itsString[i], j)}

//WHILE LOOP

let ind = 0;
while (ind < 20){console.log(ind); ind++;}

// for each (index and value), for of, for in LOOPS

// do-while LOOP
// runs once only no matter what

do {console.log("This is the FIRST step that is ALWAYS taken")}
while (false){console.log("Should not be running but it will ONCE")}

// ARRAYS

let animals = ['donkey', 'eagle', 'bear', 'zebra']

for (let i = 0; i < animals.length; i++){console.log(animals[i])}


// ADDING

animals.push('tiger', 'monkey')
console.log(animals)

// REMOVING VALUES FROM ARRAY

// pop() removes last element and shift() removes first item

animals.pop()
console.log(animals)

animals.shift()
console.log(animals)

// splice add and/or removes at the same time using index
// indicate how many to remove, then new elements to be added
// .splice(index to start, how many to remove, what to add)

animals.splice(1, 1)
console.log(animals)

animals.splice(1, 3, "goat", "sloth", "narwhal")
console.log(animals)

// SLICE

//array.slice(start, end)

console.log(animals.slice(0,3))

// indexOf() and .join()

// python - separator.join(iterable)

// Array.join(',') (separator)

console.log(animals.join(','))


// switch case statement - conditional structure made for specific cases

console.log(animals)

switch (animals[1]){
    case 'narwhal': console.log("the horn"); 
    break;
    case 'donkey' : console.log('yeehaw'); 
    break;
    default : 
    console.log("What animal are you")
}
