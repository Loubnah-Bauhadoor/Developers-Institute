//Using prompt() and alert(), ask a user for their age.

//prompt("What's your age?", "23")

//let age = "prompt"
//alert(`You are ${age}` );


let age = prompt("Please enter your age");

//age

if(age<18){
    alert(`Sorry, you are too young to drive this car. Powering off`)

}

else if (age ===18){
    alert(`Congratulations on your first year of driving. Enjoy the ride!`)
}
else{
    alert(`Powering on, Enjoy the Ride`)
}

//
let Age = 18;
switch(Age){
    case 18:
        alert( `Congrats on first driving! Enjoy!`)

}

switch(Age){
    case 18:
        alert(`congrats!`)
    case 20:
        alert(`you have two years ex`)
    }

    switch(Age){
        case 18:
            alert(`congrats!`)
            break;
        case 20:
            alert(`you have 2 years ex`)

    }



    /**
     * let age = Number(prompt("Plase enter your age"));
 
if (age < 18) {
 
alert('Sorry, you are too young to drive this car. Powering off')
} else if (age === 18){
 
alert('Congratulations on your first year of driving. Enjoy the ride!')
} else {
alert('Powering On. Enjoy the ride')
 
     */


let fruit = 'Papayas';

switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}



//exercise 2

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}


//exercise 3

let b = 2 + 2;

switch (b) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}


let persons= [
    ["Jack", "Doe", 20, "Blue"],
    ["John", "Doe", 20, "Blue"],
    ["Bob", "Doe", 50, "Black"],
    ["Alice", "Doe", 60, "Blue"],

]

let johnFirstName = persons[1][0];



//1. Create an object that has properties "username" and "password". Fill those values in with strings.

let login = {
    
        username: "Loub",
        password: "Lou123"
    
    }


    //2. Create an array which contains the object you have made above and name the array "database".

let database = [
    login,
]


let newsfeed = [
    { username: "dummy1", timeline:"dummy1" },
    { username: "dummy2", timeline:"dummy2" },
    { username: "dummy3", timeline:"dummy3" }
]

console.log(login);
console.log(database);
console.log(newsfeed);