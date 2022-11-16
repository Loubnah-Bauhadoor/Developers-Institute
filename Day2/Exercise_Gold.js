//Exercise 1 : Favorite Color
let sentence = ["my","favorite","color","is","blue"];
let joinSentence = sentence.join();
console.log(joinSentence);




//Exercise 2 : Mixup




//exercise 2
//let str1 = "Hello";
//let str2 = "World";


let str1 = "mix";
let str2 = "pod";
let str3 = str1;
str1 = str2.slice(0,2) + str1.slice(2);
str2 = str3.slice(0,2) + str2.slice(2);

str3 = str1 + " " + str2;
console.log(str3);


//2. Slice out and swap the first 2 characters of the two strings from part 1.


/**
 * 3. Create a third variable where the value is the concatenation of 
 * the two strings from the part 1 (separated by a space).
 */


//4. Finally console.log the new concatenated string.

//console.log()



//Exercise 3 : Calculator

//1.Prompt the user for the first number.

 

first_number = prompt("Please enter your first number.", "20");

//Store the first number in a variable called num1.


let num1 = first_number
console.log(num1);


//Prompt the user for the second number.

second_number = prompt("Please enter your second number.", "40");

//Store the second number in a variable called num2.

let num2 = second_number
console.log(num2);


/**
 * let op = prompt("Input your arithmetic operator (+, -, *, /, %)",0);
 * switch (op) {
 *  case "+": output = firstnum + secondnum; break;
 *  case "-": output = firstnum - secondnum; break;
 * case "*": output = firstnum * secondnum;break;
 * case "%": output = firstnum % secondnum;break;
 * case "/": output = firstnum / secondnum;break;
 * default: alert("unrecognised operation"); break;
 * }
 */

//Create an Alert where the value is the SUM of num1 and num2.

let sum = Number(num1) + Number(num2);
alert(`The sum is ${sum}` );
