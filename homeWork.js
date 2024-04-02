//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

// iterate through list - google loops
// check if each element in list is inside string
// if name in string => matched + dog_name ? or verbatim?
// else no matches

/* function name(parameters - string, array){
  for (setting variable limits for iteration) {
    if (string.includes(name)) {
        console.log("Matched dog_name");}
  else {
    console.log("No Matches");
}
*/

function findWords(str, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (str.toLowerCase().includes(arr[i].toLowerCase())) {
            console.log("Matched dog_name");
        } else {
            console.log("No Matches");
        }
    }
}

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog", "eyes", "IS", "hELLo"];

findWords(dog_string, dog_names);

/* 
Let's review:

the function's code block starts with a for loop, defining variable i as 0
so it can continue the loop as long as variable i is less than length of arr

i++ means variable i is incremented by 1 after each iteration, making the
loop go to the next element in the list

if conditional follows for loop
both parameters used .toLowerCase() to make them case insensitive
condition checks if the str includes element at index arr[i]
if so, it will print statement accordingly

since str membership check uses arr[i], i++ increments by 1 after each loop



//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even 
index with a splice,
and replaces it with the string "even index" */

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// .splice(index to start, how many to remove, what to add)
// .splice(i%2==0, 1, "even index") ?
// removing only one element at a time at even index because iterating via loop


function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i%2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
   return console.log(arr);
}

let list = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

replaceEvens(list);

/*
Let's review:

the function above takes in one parameter, arr
variable i is set to 0 and will increment by 1 via i++ as long as i < arr.length
if condition next - if variable i index is even
follow the code block to splice arr (starting at i, remove 1 element, and add string)
once loop is complete, return arr under for loop, not if conditional 

*/