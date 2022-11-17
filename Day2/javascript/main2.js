// here we run the js code

/* let x = 3 + 7
console.log(x) */

// let x = 5


/*
save as
.js
.css
.html

*/  




/* let name;
undefined

let y = 3 + 7;
let c = 5;

let myStr = "aaa" */


//Exercise 1

let addressNumber;
let addressStreet;
let country;

addressNumber = 6;
addressStreet = "Rose-Belle";
country = "Mauritius";

let globalAddress = " I live in " + addressStreet + " " + addressNumber + ", in " + country;





//Exercise 2
//birthdate

/* or
let birthdate = 1999;
let futureYear = 2023;

*/


let birthdate;
let futureYear;


birthdate = 1999
futureYear = 2023



let globalYear = "i will be " + ( futureYear -  birthdate ) + " years old in " + futureYear


//Exercise 3


// 

/*|| (or)
or |

*/



 //Exercise 1: Your Favorite Food


 let favFood = "Pizza";
 let favMeal = "Dinner";


 console.log(`I eat ${favFood} at every ${favMeal}` )



/**
 * let globalFood = "If your favorite food is" + favFood +
" and your favorite meal of the day is" + favMeal + ", " + "you will " 

 */


 //Exercise 2 : Series

 //Part I
 //1
 const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

 let myWatchedSeriesLength = myWatchedSeries.length;


//2
let myWatchedSeriesSentence = myWatchedSeries.join();


//3
console.log(`I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`);


//Part II

// index number: starting at 0
 //1
myWatchedSeries[2] = "Friends"
console.log(myWatchedSeries)
 

//2
//push() method: adds a new element at the end of an array.
myWatchedSeries.push('Squid game');

console.log(myWatchedSeries);


//3
//unshift() will add a new element at the beginning of the array, It will become index 0.
myWatchedSeries.unshift("Spiderman")
console.log(myWatchedSeries);

//4
/**
 * index, element(delete only one thing)
 * splice() method : adds new items to an array/ remove items
 * 
 * The first parameter defines the position where new elements should be added (spliced in).
The second parameter defines how many elements should be removed.
*/

myWatchedSeries.splice(1,1)
console.log(myWatchedSeries);

//5
let moneyHeist = myWatchedSeries;

console.log(myWatchedSeries[1][2]);


//6

console.log("The series i have watched are " + myWatchedSeries);


//Exercise 3 : The Temperature Converter

var celsius = 30;
let fahrenheit = (celsius*9)/5 + 32;
console.log(`${celsius}°c  is ${fahrenheit}°f`);

/**
 * 
 * var celsiusInF = (celsius*9)/5 + 32;
 * console.log(celsius + '°C is ' + celsiusInF + '°F');
 * var fahrenheit = 20;
 * var fahrenheitInC = ((fahrenheit - 32)*5)/9;
 * console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C'); 

 * 
 */


//Exercise 4 : Guess The Answers #1

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:it will output 55 because a and b are numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: it will output 23 because a and b are numbers
// Actual: 23


//value of c

console.log(c)

// Actual: c is undefined


console.log(3 + 4 + '5');   

// Actual: 3+4 = 7 AND STRING '5'
// :. 75


//Exercise 5 : Guess The Answers #2

console.log(typeof(15))
// Prediction:number
// Actual:number

console.log(typeof(5.5))
// Prediction: number
// Actual:number

console.log(typeof(NaN))
// Prediction:number
// Actual:number

typeof("hello")
// Prediction: string 
// Actual: string

console.log(typeof(true))
// Prediction: boolean
// Actual:boolean 

console.log(typeof(1 != 2))
// Prediction: boolean
// Actual: boolean

console.log("hamburger" + "s")
// Prediction:hamburgers
// Actual:hamburgers

console.log("hamburgers" - "s")
// Prediction:NAN
// Actual: not a number

console.log("1" + "3")
// Prediction:13
// Actual:13

console.log("1" - "3")
// Prediction:-2
// Actual:-2

console.log("johnny" + 5)
// Prediction:johnny5
// Actual:

console.log("johnny" - 5)
// Prediction:nAn
// Actual:not a number 

console.log(99 * "hello")
// Prediction:Nan
// Actual: not a number 

console.log(1 != 1)
// Prediction: false
// Actual: false

console.log(1 == "1")
// Prediction: false
// Actual: True

console.log(1 === "1")
// Prediction: false
// Actual: False





//Exercise 6 : Guess The Answers #3
console.log(5 + "34");
// Prediction: 534
// Actual:534

console.log(5 - "4");
// Prediction:
// Actual:1


console.log(10 % 5);
// Prediction:0
// Actual:0

console.log(5 % 10);
// Prediction:
// Actual:5
console.log("Java" + "Script");
// Prediction:JavaScript
// Actual:JavaScript
console.log(" " + " ");
// Prediction:
// Actual:
console.log(" " + 0);
// Prediction:  0
// Actual:  0
console.log(true + true);
// Prediction:
// Actual:2
console.log(false + true);
// Prediction:
// Actual:1
console.log("Bob" - "bill");
// Prediction:
// Actual:NaN
