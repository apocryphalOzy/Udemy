//**************
// Coding Challenge #1
//**************
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;
// let markMass1 = 95;
// let markHeight1 = 1.88;
// let johnMass1 = 85;
// let johnHeight1 = 1.76;

// let markBMI, markBMI1;
// let johnBMI, johnBMI1;

// markBMI = markMass / (markHeight * markHeight);
// markBMI1 = markMass1 / markHeight1 ** 2;
// johnBMI = johnMass / (johnHeight * johnHeight);
// johnBMI1 = johnMass1 / johnHeight1 ** 2;

// let markHigherBMI = markBMI > johnBMI;
// let markHigherBMI1 = markBMI1 > johnBMI1;

// console.log(markHigherBMI, markHigherBMI1);

//**************
// Coding Challenge #2
//**************
// if (markHigherBMI) {
//   console.log(
//     `Wooww Marks BMI of ${markBMI} is way bigger than Johns which is ${johnBMI}`
//   );
// } else {
//   console.log(`John is way fatter than Mark`);
// }

// if (markHigherBMI1) {
//   console.log(
//     `Wow Mark is a fat fudger with a ${markBMI1} compared to Johns love weight BMI of ${johnBMI1}`
//   );
// } else {
//   console.log(
//     `John, your BMI is ${johnBMI1} compared to marks BMI of ${markBMI1}`
//   );
// }

//**************
// Coding Challenge #3
//**************
// let tDAvg = (100 + 108 + 89) / 3;
// let tKAvg = (80 + 108 + 89) / 3;

// if (tDAvg > tKAvg && tDAvg > 100) {
//   console.log(`team dolphin wins with an average score of ${tDAvg} points`);
// } else if (tDAvg < tKAvg && tKAvg > 100) {
//   console.log(
//     `team koala average wins with an average score of ${tKAvg} points`
//   );
// } else if (tKAvg === tDAvg && tKAvg > 100 && tDAvg > 100) {
//   console.log(
//     `both teams averaged the same amount of points with ${tDAvg} and ${tKAvg}`
//   );
// } else if (tKAvg === tDAvg && tKAvg < 100 && tDAvg < 100) {
//   console.log(
//     `both teams averaged the same score, but did not win any trophies`
//   );
// } else if (tDAvg > tKAvg && tDAvg < 100) {
//   console.log(`average score for team dolphins is ${tDAvg}`);
// } else if (tDAvg > tKAvg && tDAvg < 100) {
//   console.log(`average score for team koalas is ${tKAvg}`);
// }

//**************
// Coding Challenge #4
//**************

// let bill, tip1, tip2;
// bill = 430;
// tip1 = 0.15;
// tip2 = 0.2;

// const tipValue = bill >= 50 && bill <= 300 ? bill * tip1 : bill * tip2;

// console.log(
//   `The bill was ${bill} which makes the tip ${tipValue} and the total value $${
//     bill + tipValue
//   }`
// );

//**************
// Coding Challenge #5
//**************
//create an arrow function to calculate the average of two teams
// let calcAverage = (Score1, Score2, Score3) => {
//   return (Score1 + Score2 + Score3) / 3;
// };

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);
// let avgDolphins1 = calcAverage(85, 54, 41);
// let avgKoalas1 = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return `No team wins!!!`;
//   }
// }

// console.log(checkWinner(avgDolphins, avgKoalas));
// console.log(checkWinner(avgDolphins1, avgKoalas1));

//**************
// Coding Challenge #6
//**************
let bills = [125, 555, 44];

function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
}
let tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tip);
let total = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];

console.log(total);

//**************
// Coding Challenge #7
//**************
//**************
// Coding Challenge #8
//**************
