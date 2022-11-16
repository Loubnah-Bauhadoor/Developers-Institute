//🌟Exercise 1 : The World Translator

//Ask the user which language they speak.

let language= prompt("Which language do you speak?");

//Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

language.toLowerCase();

//Create a few conditions :
//If the user speaks French : display “Bonjour”

switch(language){
    case 'french' :

    alert('Bonjour');

    break;

//If the user speaks English : display “Hello”

    case 'English':

    alert('Hello');

    break;
//If the user speaks Hebrew : display “Shalom”


    case 'Hebrew' :

    alert('Shalom');

    break;

//If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
    default:

    alert('01110011 01101111 01110010 01110010 01111001');
}


//🌟Exercise 2 : The Grade Assigner

//Ask the user for their grade.
let grade = prompt("Please enter your grade");

//If the grade is bigger than 90, console.log “A”

if (grade > 90) {
    console.log("Grade : A")
} 



//If the grade is between 80 and 90 (included), console.log “B”
else if (grade >80 && grade<=90){
    console.log("Grade : B"); 
}


//If the grade is between 70(included) and 80 (included), console.log “C”

 else if(grade <= 80 && grade >= 70){

    console.log("Grade : C")


//If the grade is lower than 70, console.log “D”

} else if(grade <= 70){

    console.log("Grade : D")

}
//else(consol.log("Failed Exam"))



//🌟Exercise 3 : Verbing

//Prompt the user for a string. It must be a verb.


var verb = prompt("Enter a verb");

//If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.


if(verb.length >= 3 && !verb.endsWith("ing")){



    let concatenate = string.concat("ing");



    alert(`${concatenate}`);



}

//If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.

else if (verb.length>= 3 && verb.endsWith("ing")){

   

    let concatenate2 = verb.concat("ly");

    alert(`${concatenate2}`);

}
//If the length of the string is less than 3, leave it unchanged.
else if( verb.length < 3){



    alert(`${verb}`);

}



//🌟
//🌟