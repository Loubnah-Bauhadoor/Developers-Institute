/**Exercise 1
 * Create a structured HTML file linked to a JS file

1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

Sample Output: //"0 is even" //"1 is odd" //"2 is even"
 */


//for (let i = 0; i <= 15; i++) {
   // console.log(i);
//}



//if(number % 2 == 0) {
 //   alert(`${number} is an even number`)

//}
//else{
   // alert(`${number} is an odd number`)
//}

//5 % 2 !==0
//result : true

/** 
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0){

    console.log(i + "is even")
} 
else{
    console.log(i + "is odd")
}
}
*/


// type
/** 
for (let i = 0; i <= 15; i++) {
let type = i % 2 ===0 ? 'even' : 'odd'
console.log(i + " +type")
console.log (`${i} is ${type}`)
}


/**
 * for (let i = 0; i <= 15; i++) {
    console.log(`${i} is ${i % 2 === 0 ? 'even' : 'odd'}`)
}





let n = 0, 
while (n>3){
    n++ ;
    console.log(n)
}



//while

for(let i = 0; i <10; i++){
    if (i ===3){
        continue;
    }
    console.log("The number is" + i); // 0 1 2
}

*/

/**
 * let colors = ["blue", "yellow", "red"];

for (let i of colors) {
   console.log(i); // logs blue, yellow, red
}
 */
//Exercise 2
//1. Write a JavaScript for loop that will go through the variable names.
let names= ["john", "sarah", 23, "Rudolf",34]

for(let i of names){ 
    if (typeof (i) !== 'string' ){
        continue
    }
 let firstLetter = i.charAt(0)
if (firstLetter !== firstLetter.toLocaleUpperCase()){
    i = firstLetter.toUpperCase() + i.slice(1);
}
    console.log(i);
}

//if the item is not a string, pass.


//if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.


/**
 * let names= ["john", "sarah", 23, "Rudolf",34]
for (let name of names) {
    if (typeof (name) !== 'string') {
        continue;
    }
    let firstLetter = name.charAt(0)
    if ( firstLetter !== firstLetter.toUpperCase()) {
        name = firstLetter.toUpperCase() + name.slice(1);
    }
    console.log(name)
}
.
 */



/**
 * let names= ["john", "sarah", 23, "Rudolf",34]
for (let name of names) {
    if (typeof (name) !== 'string') {
        continue;
    }
    console.log(name)
}
 */

let names= ["john", "sarah", 23, "Rudolf",34]
for (let name of names) {
    if (typeof (name) !== 'string') {
        continue;
    }
    console.log(name)