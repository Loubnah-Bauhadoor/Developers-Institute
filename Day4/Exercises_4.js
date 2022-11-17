//🌟 Exercise 1 : List Of People
/**
* var - can access at all of the scopes and can be modifiedlet - can access just at the
        current and the internal scopes and can be changedlet - can access just at the current and
        the internal scopes and can not be changed


* var - can access at all of the scopes and can be modified    

*let -  can access just at the current and the internal scopes and can be changed
    
*const - can access just at the current and the internal scopes and can not be changed
*/


//Write code to remove “Greg” from the people array.
//The shift() method removes the element 

const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
console.log(people);

//Write code to replace “James” to “Jason”.


people.splice(2,1, "Jason");

console.log(people);


//Write code to add your name to the end of the people array.

people.push("Loubnah")
console.log(people);

//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
let index = people.indexOf("Mary");


/**
 * Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method
*/


let newPeople = people.slice(1,3);

console.log(people)

console.log(newPeople)

console.log(index)

//Write code that gives the index of “Foo”. Why does it return -1 ?

let index2 = people.indexOf("Foo")

console.log(index2)// because Foo is not in the array




//Create a variable called last which value is the last element of the array.
//Hint: What is the relationship between the index of the last element in the array and the length of the array?

let last = people.slice(3)

console.log(last)



//Part II - Loops

//Using a loop, iterate through the people array and console.log each person




for (let i = 0; i < people.length; i ++)

{

  console.log(people[i])

}

//Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
//Hint: take a look at the break statement in the lesson.

for(let n of people) {

    console.log(n);

    if(n === "Jason") {

       break;

    }

 }


 //🌟 Exercise 2 : Your Favorite Colors

 //Create an array called colors where the value is a list of your five favorite colors.
 const colors = ["Red", "Yellow", "Purple", "Green", " Pink"]

 //Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

 for(let c in colors){

    console.log(`My #${Number(c)+1} choice is ${colors[c]} `)

}




//Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//Hint : create an array of suffixes to do the Bonus


//🌟 Exercise 3 : Repeat The Question

/**
 * Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
 */

let num  = prompt('Enter a number')

var number = parseInt(num);



/**
 * While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?
 */

while (num<10){

     num = Number(prompt(`Enter another number`))

 break;

}

//🌟 Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//Console.log the number of floors in the building
console.log(building.numberOfFloors);

//Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor)

console.log(building.numberOfAptByFloor.thirdFloor)


//Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1])

console.log(building.numberOfRoomsAndRent.dan[0])


//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
if(building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]> building.numberOfRoomsAndRent.dan[1]){

  building.numberOfRoomsAndRent.dan[1] = 1200

  console.log(building)

}



//🌟 Exercise 5 : Family

//Create an object called family with a few key value pairs.

const family = {
    dad: "Sam",
    mom: "swal",
    Bro: "Hud",
    sis: " Tom"

};




for (const key in family){
    console.log('key:', key)
    console.log('value:',family[key])
}
//Using a for in loop, console.log the keys of the object.

// key -- index
// value // position


 //   for (const [key, value] of Object.entries(family)) {
  //  console.log(`${key}: ${value}`);
 // };
  

//Using a for in loop, console.log the values of the object.

//Exercise 6



const details = {

    my: 'name',

    is: 'Rudolf',

    the: 'raindeer'

  }



  let answer = " "

  for (const k in details){

    answer = answer + " "+ k + " "+ details[k]

  }

  console.log(answer)




  //Exercise 7



const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];



let n = ""

const sortName = names.sort()



for (const name of sortName){

    console.log(name)

    n = n + name[0]



}

console.log(n)