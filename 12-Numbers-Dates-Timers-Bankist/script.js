"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();

    const displayDate = `${day}/${month}/${year}`;
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    //add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////
//Converting and checking Numbers
/////////////////////////////////////////////////
//numbers are represented internally in a 64 base 2 format. so that means the numbers are always stored in binary form.
console.log(23 === 23.0); //output true

//base 10 - numbers 0 to 9
//binary base 2 - numbers 0 and 1
console.log(0.1 + 0.2); //output 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //output false

//type coercion. string to number
console.log(Number("23")); //23
console.log(+"23"); //23

//parse a number from a string
console.log(Number.parseInt("30px")); //30 is a number
console.log(Number.parseInt("e23")); //string needs to start with a number - NaN
console.log(Number.parseInt("30px", 10)); // 30
console.log(Number.parseFloat("2.5rem")); //2.5
console.log(Number.parseInt("2.5rem")); //2
//NaN examples
console.log(Number.isNaN(20)); //check if value is not a number - false, because it is a number
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20x")); //true
console.log(Number.isNaN(23 / 0)); //false
//check if value is a number
console.log(Number.isFinite(+"20x")); //false
console.log(Number.isInteger(+"20x")); //false
console.log(Number.isInteger(20)); //true

/////////////////////////////////////////////////
//Math and Rounding
/////////////////////////////////////////////////
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //square root 5
console.log(8 ** (1 / 3)); //cubic root 2
console.log(Math.max(5, 123, 4, 213, 44, 5)); //213
console.log(Math.max(5, 12, 4, "50", 44, 5)); //50
console.log(Math.max(5, 123, 4, "20px", 44, 5)); //NaN
console.log(Math.min(5, 123, 4, "20px", 44, 5)); //NaN
console.log(Math.min(5, 123, 4, "1", 44, 5)); //1

console.log(Math.PI * Number.parseFloat("10px") ** 2); //314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1); //random values between 1 and 6
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
//0...1 -> 0...(max-min) -> min...max
console.log(randomInt(10, 20));

//rounding integers
console.log(Math.trunc(23.3));
//round to the nearest integer
console.log(Math.round(23.3)); //23
console.log(Math.round(23.5)); //24
//rounds up
console.log(`Ceil: ${Math.ceil(23.1)}`); //24
console.log(`Ceil: ${Math.ceil(23.9)}`); //24
//rounds down
console.log(`Floor: ${Math.floor(23.1)}`); //23
console.log(`Floor: ${Math.floor(23.9)}`); //23

//doesn work the same with negative numbers
console.log(`Floor: ${Math.floor(-23.3)}`); //-24
console.log(`Ceil: ${Math.ceil(-23.3)}`); //-23

//rounding decimals
console.log((2.7).toFixed(0)); //decimal places 3 and is convert to string
console.log((2.7).toFixed(3)); //2.700 and is a string
console.log((2.345).toFixed(2)); //2.35 and is a string
console.log(+(2.345).toFixed(2)); //convert back to a number

/////////////////////////////////////////////////
//Remainder Operator
/////////////////////////////////////////////////
console.log(5 % 2); //remainder of 1
console.log(5 / 2); //5 = 2 * 2 + 1
console.log(8 % 3); //2
console.log(8 / 3); //8 = 2 * 3 + 2

//determining even or odd numbers
//even numbers, the remainder is 0
console.log(6 % 2); // 0
console.log(6 / 2); // 3
//odd numbers, the remainder is odd
console.log(7 % 2); //1
console.log(7 / 2); //3.5

const isEven = (N) => N % 2 === 0;
console.log(isEven(8)); //true - even
console.log(isEven(514)); //true -even
console.log(isEven(23)); //false - odd

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "orangered";
    if (i % 3 == 0) row.style.backgroundColor = "blue";
  });
});

/////////////////////////////////////////////////
//Working with BigInt
/////////////////////////////////////////////////
//Numbers are represented internally as 64 bits. That means there are exactly 64 ones or zeros to represent any given number
console.log(2 ** 53 - 1); //biggest number that JS can represent in the name space
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
//adding an 'n' to the end of a very large number turns the number into a BIGINT number
console.log(123482374892349802389479823489892375n); //bigint number
//same result with bigint function
console.log(BigInt(123482374892349802389479823489892375));

//operations with bigInts
console.log(10000n + 10000n);
console.log(198298321492329384289348923n * 100000000000n);
//you cant mix bigInts with regular numbers
const huge = 19023489238948923n;
const num = 23;
//console.log(huge * num); //Cannot mix BigInt and other types, use explicit conversions
console.log(huge * BigInt(num)); //437540252495825229n
//there are exceptions to this
console.log(20n > 15); //true
console.log(20n === 20); //false. these two numbers have a different primitive types
console.log(typeof 20n); //bigInt
console.log(typeof 20); //number
console.log(20n == "20"); //true
console.log(huge + " is REALLY big!!!!!!");

//divisions bigInts
console.log(10n / 3n); //returns closest bigInt - 3n
console.log(10 / 3); //3.3333333333333335

/////////////////////////////////////////////////
//Creating Dates
/////////////////////////////////////////////////
// Create a date
const now = new Date();
console.log(now); //logs our current date
//parse the date
console.log(new Date("Thu Dec 17 2020 13:42:56"));
console.log(new Date("December 24, 2015"));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); //month year in JS is zero based
console.log(new Date(2037, 10, 33)); //dec 03 - goes into next month
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //convert from days to milleseconds

//working with dates
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay()); //day of the week - thursday
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); //international standard date
//get time stamp for date since jan 1st 1970 - when unix time started
//ms that has passed since jan 1 1970
console.log(future.getTime());
console.log(new Date(2142285785000));
//time stamp for current date
console.log(Date.now());
console.log(new Date(1608242280369));

//set different dates with methods
future.setFullYear(2040);
console.log(future); //Mon Nov 19 2040
*/
