// let js = 'amazing';

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// const averageAge = ageJonas + ageSarah / 2;
// console.log(averageAge);

////////////////////////////////////////////
// Coding Challenge #1

// Mark's Data. height in meters, weight in kg.
// const markHeight = 1.69;
// const markWeight = 78;
// const markBMI = Math.round(markWeight / markHeight ** 2);

// // John's Data.
// const johnHeight = 1.95;
// const johnWeight = 92;
// const johnBMI = Math.round(johnWeight / johnHeight ** 2);

// // Boolean
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

////////////////////////////////////////////
// Coding Challenge #2

// Mark's Data.
// const heightMark = 1.69;
// const massMark = 78;
// const bmiMark = Math.round(massMark / heightMark ** 2);

// // John's Data.
// const heightJohn = 1.95;
// const massJohn = 92;
// const bmiJohn = Math.round(massJohn / heightJohn ** 2);

// // Codition statement
// if(bmiMark > bmiJohn) {
//     console.log(`"Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!"`);
// } else {
//     console.log(`John's BMI is higher than Mark's!`);}

// 5 falsy values: 0, "", undefined, null, NaN

// const age = 18;
// if (age === 18) console.log("You just became an adult");

/////////////////////////////////////////////
/// # Coding challenge 3
// 1. Calculate the average for each team.
// const scoreDolphins = Math.round((97 + 112 + 101) / 3);
// const scoreKoalas = Math.round((109 + 95 + 123) / 3);
// console.log(`Dolphins score is: ${scoreDolphins}`);
// console.log(`Koalas score is: ${scoreKoalas}`);
// // 2. Compare the team's average and determine the winner. Don't forget there can be a draw.
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log(`Dolphins are the champions 🏆`);
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//   console.log(`Koalas are the champions 🏆`);
// } else {
//   console.log(`It's a stalemate!`);
// }

// SWITH STATEMENT.

// const day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
//     break;
//   case "Tuesday":
//     console.log(`Prepare theory videos`);
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log(`Write code examples`);
//     break;
//   case "Friday":
//     console.log(`Record videos`);
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log(`Enjoy the weekend my man 🥇`);
//     break;
//   default:
//     console.log(`Not a valid day!`);
// }

/// TERNARY OPERATOR.
// const age = 23;
// age >= 18
//   ? console.log(`I like to drink coffee ☕`)
//   : console.log(`I like to drink 🍵 `);

///////////////////////////////////////////
// Coding Challenge #4  REPEAT THIS CHALLENGE 4 TIMES
// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
