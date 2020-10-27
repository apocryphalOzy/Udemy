//********************
// Values and Variables
//********************

// let country = "USA";
// let continent = "North America";
// let population = 350000000;

// console.log(country, continent, population);

//********************
//Data Types
//********************
// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//********************
//let, const and var
//********************
// language = "English";
//const isIsland = false;
//console.log(language, isIsland);
//syntax error, isIsland has already been declared

//********************
//Basic Operators
//********************
// let countrySplitInHalf = population / 2;
// let increaseCountryPopBy1 = population + 1;
// let Finland = 6000000;
// let compareCountry = population > Finland;
// let avgPopCountry = 33000000;
// let compareCountry2 = avgPopCountry >= population;
// let description =
//   country +
//   " is in " +
//   continent +
//   ". and its " +
//   population +
//   " million people speak " +
//   language +
//   "!";
// console.log(countrySplitInHalf);
// console.log(increaseCountryPopBy1);
// console.log(compareCountry);
// console.log(compareCountry2);
// console.log(description);

//********************
//Strings and Template Literals
//********************
// console.log(
//   `${country} is in ${continent} and its ${population} million people speak ${language}`
// );
//********************
//Taking Decisions: if / else Statements
//********************
// let usaPOP = 350000000;

// if (usaPOP > 33000000) {
//   console.log("USA population is above average");
// } else {
//   console.log("USA is below average in population and a lot of other things");
// }

//********************
//Type Conversion and Coercion
//********************
//addition sign interpreted as concatenation in type coercion
// console.log("9" - "5"); //4
// console.log("19" - "13" + "17"); //617 add sign for concatenation
// console.log("19" - "13" + 17); //23
// console.log("123" < 57); //false
// console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

//********************
//Equality Operators: == vs. ===
//********************
// let numNeighbors = prompt(
//   "How many neighbor countries does your country have?"
// );

// numNeighbors = Number(numNeighbors);
// if (numNeighbors === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//   console.log("more than 1 border!");
// } else {
//   console.log("no borders");
// }

//********************
//Logical Operators
//********************

// let countryPop = 350000000;
// let countrySpeakEnglish = true;
// let isCountryIsland = false;

// if (countryPop < 50000000 && countrySpeakEnglish && isCountryIsland) {
//   console.log("Come live in the USA!");
// } else {
//   console.log("USA doesnt meet your criteria");
// }

//********************
//The switch Statement
//********************
// let language = "english";
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers");
//     break;
//   case "spanish":
//     console.log(`2nd place in native speakers`);
//     break;
//   case "english":
//     console.log(`third place`);
//     break;
//   case "hindi":
//     console.log(`4th place`);
//     break;
//   case "arabic":
//     console.log(`5th place`);
//     break;
//   default:
//     console.log("great language too!");
// }

//********************
//The Conditional (Ternary) Operator
//********************

// const population = 200000;
// const country = "USA";

// console.log(
//   `${country} population is ${
//     population > 33000000 ? "above" : "below"
//   } average!`
// );

//********************
// Functions
//********************
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const countryStats = describeCountry("USA", 1234, "Berka");
// console.log(countryStats);

// //********************
// //Function Declarations vs. Expressions
// //********************
// //function declaration
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// console.log(
//   `Your country represents ${percentageOfWorld1(
//     1441
//   )} percent of the world population.`
// );

// //function expression
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// console.log(
//   `Your country represents ${percentageOfWorld2(
//     1500
//   )} percent of the world population.`
// );
// //********************
// //Arrow Functions
// //********************
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// console.log(
//   `Your country represents ${percentageOfWorld3(
//     2000
//   )} percent of the world population.`
// );
//********************
//Functions Calling Other Functions
//********************
//********************
//Introduction to Arrays
//********************
//********************
//Basic Array Operations (Methods)
//********************
//********************
//Introduction to Objects
//********************
//********************
//Dot vs. Bracket Notation
//********************
//********************
//Object Methods
//********************
//********************
//Iteration: The for Loop
//********************
//********************
//Looping Arrays, Breaking and Continuing
//********************
//********************
//Looping Backwards and Loops in Loops
//********************
//********************
//The while Loop
//********************
