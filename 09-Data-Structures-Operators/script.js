"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 Enhanced object literals
  openingHours, //from object above

  order(startIndex, mainIndex) {
    //old way - order: function (startIndex, mainIndex) {}
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3} `);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Working with Strings - Part 2

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in a name
const passenger = "JeReMy";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
//function that does the same thing
const passengerName = function (name) {
  const passenger = name;
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};
passengerName("heNrY");
passengerName("DaRLene");

//compare user input email
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); //removes whitespace from both ends of a string
console.log(trimmedEmail);

//we can do above all in 1 step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//write a function that takes the 2 emails and compares them
const compareEmails = function (email1, email2) {
  const normalizeEmail2 = email2.toLowerCase().trim();
  return email1 === normalizeEmail2;
};
console.log(compareEmails("jeremy@jeremy.com", "  JeReMy@jeReMy.Com    "));

//replace parts of strings
const priceGB = "288,97£";
const priceUs = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUs);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23";

console.log(announcement.replaceAll("door", "gate"));

//REGEX with replacing strings
console.log(announcement.replaceAll(/door/g, "gate"));

//Boolean methods on string - includes, startswith, endswith
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the New Airbus family");
}

//practice exercise
const checkBaggage = function (items) {
  //always put things to lowercase when checking
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("WELCOME ABOARD");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Sock and camera");
checkBaggage("Got some snacks and a gun for protection");
/*
///////////////////////////////////////////////

//Working with Strings - Part 1

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[2]);

console.log(airline.length);
console.log("b737".length);

//methods for strings
console.log(airline.indexOf("r"));
//get let position of 'r'
console.log(airline.lastIndexOf("r"));

console.log(airline.indexOf("portugal")); //-1 because portugal with lowercase p cant be found in airline

//use case is for slicing strings
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" "))); //TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //Portugal

//extract letter from the end of a string
console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //AP Air Portug

//using a function

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You go the middle seat");
  } else {
    console.log("You got lucky");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

/*
///////////////////////////////////////////////
//Maps: Iteration
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);
console.log(question);

//convert object to map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quiz app
console.log(question.get("question"));
//iteration on maps
//good use case on destructuring
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt("Your answer"));
const answer = 3;

console.log(question.get(question.get("correct") === answer));

//convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
///////////////////////////////////////////////
//Maps: Fundamentals

//fill in a map using the set method
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

//we can chain the set method
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed QQ");

//read data from a map using get method
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

//Use case
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//check if map contains a certain key
console.log(rest.has("categories"));

//delete elements from the map - not encouraged for properties
rest.delete(2);
console.log(rest); //deletes 2, "Lisbon, Portugal"

//remove all elements from the map
//rest.clear();

//size property
console.log(rest.size);

//use array or objects as keys
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest.get(arr));

console.log(rest);
/*
///////////////////////////////////////////////
//Sets

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);

//strings are also iterables
console.log(new Set("Jeremy"));

//determine number of values in set
console.log(ordersSet.size);

//check if a certain element is in a set
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

//add new elements to a set
ordersSet.add("Garlic Bread");
console.log(ordersSet);

//we can delete elements from a set
ordersSet.delete("Risotto");
console.log(ordersSet);
//delete ALL elements from a set
//ordersSet.clear();
//console.log(ordersSet);
//Sets have no indexes

//loop through a set since sets are iterables
for (const order of ordersSet) console.log(order);

//USE CASE FOR SETS - to remove duplicate values of arrays
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("JohnJacobJingleHeimerSmit").size);

/*
///////////////////////////////////////////////
//Looping Objects: object keys, values, and entries

//Property names - use Object.keys(objectName)

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open for ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property values - use Object.values(objectName)
const values = Object.values(openingHours);
console.log(values);

//Entire object or Property names and values together - use Object.entries(objectName)
const entries = Object.entries(openingHours);
console.log(entries);

//[key, value] - objects go key value - we use that in our destructuring
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}


/////////////////////////////////////////////////////////
//WITHOUT optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open); //typeError
}

//WITH optional chaining (?.)
//check if property or method exists on the left of the question mark
console.log(restaurant.openingHours.mon?.open); //Undefined
console.log(restaurant.openingHours?.mon?.open); //Undefined

//Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed"; //sat is falsy value
  console.log(`on ${day}, we open at ${open}`);
}

//methods - we can check if a method actually exists before we call it
//optional chaining will check if order exists
console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); // Output: our method output - it does exist
//optional chaining will check if orderRisotto exists
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist"); // Output: Method does not exist

//Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];

console.log(users[0]?.name ?? "They dont exist"); //Jonas
console.log(users[0]?.age ?? " Age does not exist"); //Age does not exist

//We always use the optional chaining operator (?.) and the nullish coalescing operator (??) together


/////////////////////////////////////////////////////////
//The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

/////////////////////////////////////////////////////////
//The nullish coalescing Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //10

//Nullish values are null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //0

/////////////////////////////////////////////////////////
//Short Circuiting (&& and ||)
//Logical operators can use ANY data type, return ANY data type, and short-circuiting.
//Short Circuiting is where if the first operand is truthy in an OR operator then the other operand will not even be evaluated.
console.log("---OR---");
console.log(3 || "jonas"); //3
console.log("" || "Jonas"); //Jonas
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || "" || "Hello" || 23 || null);

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---AND---");
//the AND operator short circuits when the first value is falsy and returns the falsy value
//the AND operator does the complete opposite of the OR operator
console.log(0 && "Jonas");
//When it is a truthy value, it evaluates until the last value and returns the last value
//the AND operator is only TRUE if all the operands are TRUE
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "jonas");

//practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

/////////////////////////////////////////////////////////
//Rest pattern and parameters
//1. Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2. functions with REST
//function that accepts any number of parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12);

const x = [23, 5, 7];
add(...x);

//real world edge case
restaurant.orderPizza("mushrooms", "onion", "garlic");
restaurant.orderPizza("mushrooms");

/////////////////////////////////////////////////////////
//practical application of destructuring
restaurant.orderDelivery({
  time: "22:30",
  address: "Via Del Sole, 22",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via Del Sole, 22",
  starterIndex: 1,
});

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching order of categories(variables) around
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//destructure a nested array inside an array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
//destructuring inside of destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values - can be useful if we get data from an API
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


/////////////////////////////////////////////////////////
//destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//make variable names different than the property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//setting default values in objects
const { menu = [], starterMenu: starters = [] } = restaurant; //helpful when we dont have our data hard-coded
console.log(menu, starters);

//mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); //we had to wrap the destructuring assignment in parenthesis
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/////////////////////////////////////////////////////////
//The spread operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(newArr);

console.log(...goodNewArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`) //Error: unexpected token

//REAL WORLD EXAMPLE
const ingredients = [
  prompt("Lets make pasta! What is ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
