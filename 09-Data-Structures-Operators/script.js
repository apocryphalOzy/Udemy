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
