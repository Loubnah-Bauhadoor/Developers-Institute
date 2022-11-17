//🌟Exercise 1: Simple If/Else Statement

//2.Write an if/else statement that checks which number is bigger.

let x = 10;
let y = 7;

if (x > y) {
    console.log("x is the biggest number")
    }
    else{
        console.log(`x is not the biggest number`)
    }


//  else if (x<y){
//    alert(`x is not the biggest number`)





//🌟Exercise 2: Chihuahua

//Create a variable called newDog where it’s value is “Chihuahua”.
let newDog = "Chihuahua"

//Check and display how many letters are in newDog.
let len = newDog.length;

console.log(len);


//Display the newDog variable in uppercase and then in lowercase (no need to create new variables,
 //just console.log twice).
console.log(newDog.toLowerCase());

console.log(newDog.toUpperCase());


/**
 * Check if the variable newDog is equal to “Chihuahua”
if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
else, console.log ‘I dont care, I prefer cats’

 */
if(newDog==="Chihuahua"){

    console.log(`I love Chihuahuas, it’s my favorite dog breed`);

}

else {

    console.log(`I dont care, I prefer cats`)

}





//🌟Exercise 3: Even Or Odd

//Prompt the user for a number and save it to a variable.


number = prompt("Please enter a number.", "20");


/**
 * Check whether the variable is even or odd.
If it is even, display: “x is an even number”. Where x is the actual number the user chose.
If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

 */


if(number % 2 == 0) {
    alert(`${number} is an even number`)

}
else{
    alert(`${number} is an odd number`)
}





//🌟 Exercise 4: Group Chat

//If there is no users (the users array is empty), console.log “no one is online”.

const users = ["Lea123", "Princess45","cat&doglovers", "helooo@000", "Loub", "Annabelle", "Bella", "Mimi"];



if(users.length === 0){



    console.log(`no one is online`);

}



//If there is 1 user, console.log “<name_user> is online”
else if(users.length === 1){

    console.log( users[0] + "is online");

}


//if there are 2 users, console.log “<name_user1> and <name_user2> are online”.

else if (users.length === 2 ){

    console.log(users[0] + ", " + users[1] + " ares online");

}


//If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
else if (users.length > 2){



    let remaingUsers = users.length-2;



    console.log(`${users[0]}, ${users[1]} and ${remaingUsers} more are online`);



}