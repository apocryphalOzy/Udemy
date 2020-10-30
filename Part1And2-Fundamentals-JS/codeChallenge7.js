// //**************
// // Coding Challenge #7
// //**************
// let markObj = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return (this.BMI = this.mass / (this.height * this.height));
//   },
// };

// console.log(markObj.calcBMI());
// console.log(markObj);

// let johnObj = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return (this.BMI = this.mass / (this.height * this.height));
//   },
// };
// console.log(johnObj.calcBMI());
// console.log(johnObj);

// if (markObj.BMI > johnObj.BMI) {
//   console.log(
//     `${markObj.fullName}'s BMI (${markObj.BMI}) is higher than ${johnObj.fullName}'s BMI (${johnObj.BMI})`
//   );
// } else if (johnObj.BMI > markObj.BMI) {
//   console.log(
//     `${johnObj.fullName}'s BMI (${johnObj.BMI}) is higher than ${markObj.fullName}'s BMI (${markObj.BMI})`
//   );
// } else {
//   console.log(`John and Mark have the same BMI`);
// }

//**************
// Coding Challenge #8
//**************

function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
}
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  const tipsEachBill = calcTip(bills[i]);
  tips.push(tipsEachBill);
  totals.push(tipsEachBill + bills[i]);
}
console.log(tips);
console.log(totals);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}

console.log(`The average for the total bills is ${calcAverage(totals)}`);
