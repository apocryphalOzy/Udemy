'use strict';

//default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

//How Passing Arguments Works: Value vs. Reference
const flight = 'LH2345';
const jonas = {
  name: 'Jonas Schedtmann',
  passport: 234342563,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 234342563) {
    alert('Check in');
  } else {
    alert('wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
// //Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

//Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('high five');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

//Functions Returning Functiions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');
//same as above but all in one go
greet('hello')('Jonas');
//rewrite function as an arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('hi')('Jonas');

//The Call and apply methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function() {}
  //enhanced object literal syntax
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//DOES NOT WORK
//book(23, 'Sarah Williams');

//Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa.bookings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'WE',
  bookings: [],
};

book.call(swiss, 43, 'Mary Cooper');
console.log(swiss);

// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//more efficient way than the above 2
book.call(swiss, ...flightData);

//Bind Method
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

//bind can have preset arguments - this is called partial application
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * .23; //same as above

console.log(addVAT(100));
console.log(addVAT(23));

//arrow function to normal function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(23));
