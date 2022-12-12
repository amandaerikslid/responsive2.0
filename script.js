//console.log("Hello World");

// **let firstName = "Amanda";
// **console.log(firstName);
// first name person
//let firstNamePerson
//camel case common practice
// can not declare variales with a number

//firstName = "Katarina";
//console.log(firstName);

//let 3years = 3;
//this gives us an error

//let new = 22;
//new is a reserved word in js and cannot be used

//let name = "Amanda";
//Can cause problems, don't us name as a variable
//___________________________________________
//let weekOne = 47;
//let weekTwo = 48;

//let lastWeek = 47;
//let currentWeek = 48;
//__________________________________________





/*
const age = 16;
// persons age is 16

//*****const requiredAge = 18; 
// required age for taking a drivers license

//instead of above, you can use:
const isOfAge = age >= 18;
// compare the persons age against the required age

if (isOfAge) {
    console.log("Wii! you can take your drivers license!");
} else {
    console.log("Sorry, you cannot take your drivers license");
}

if (age >= 18) {
    console.log("Wii! you can take your drivers license!");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sorry, wait another ${yearsLeft} years`);
}


*/


//-----------FUNCTIONS CALLING OTHER FUNCTIONS----------

/*
function slice(breakfast) {
    return breakfast * 2;
}

function makeSandwich(bread, cheese) {
    const breadSlices = slice(bread);
    const cheeseSlices = slice(cheese);

    const sandwich = `I'm having ${breadslices} slices of bread with ${cheeseSlices} slices of cheese for breakfast`; 
    return sandwich;
}

console.log(makeSandwich(2, 2));

*/



//---------------------------ARROW FUNCTIONS-.-------------------


//function expression
const calcAgeOldway = function(birthYear) {
    return 2022 - birthYear;
}

//ARROW FUNCTION
const calcAge = (birthYear) => 2022 - birthYear;
// also an expression but an arrow function

const age = calcAge(1995);
console.log(age);

const yearsUntilRetire = (birthday) => {
    const age = 2022 - birthday;
    const retire = 70 - age;
    return retire;
}

const yearsLeft = yearsUntilRetire(1995);
console.log(`You have ${yearsLeft} years until you can retire`);

const newYearsRetire = (birthYear, firstName) => {
    
}