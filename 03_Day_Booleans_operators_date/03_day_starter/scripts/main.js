document.addEventListener('DOMContentLoaded', () => {
    // this is your main.js script
// LEVEL1
//1
const firstName = "John";
const lastName = "Doe";
const country = "USA";
const city = "New York";
let age = 16; 
const isMarried = false;
const year = new Date().getFullYear(); 
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);
//2
const equalNum = typeof '10' === typeof 10;
console.log(equalNum);
//3
const a = parseInt('9.8');//9
const b = 10;
const areEqual = a === b;
console.log(areEqual);
//4
// null, undefined, NaN
// true, 0, 'n'
//5
console.log(4 > 3 ,4 >= 3, 4 < 3, 4 <= 3, 4 == 4, 4 === 4, 4 != 4, 4 !== 4, 4 != '4', 4 == '4',4 === '4')
//!=, ==寬鬆比較下，字串會被強制轉成數字
console.log('python'.length !== 'jargon'.length)
//6
console.log(4 > 3 && 10 < 12, 4 > 3 && 10 > 12, 4 > 3 || 10 < 12, 4 > 3 || 10 > 12, !(4 > 3), !(4 < 3), !(false), !(4 > 3 && 10 < 12), !(4 > 3 && 10 > 12), !(4 === '4'), `There is no 'on' in both dragon and python`)
// true false true true false true true false true true true
//7
// const now = new Date();
// const nowYear = now.getFullYear();
// const nowMonth = now.getMonth() + 1; // Months are zero-based
// const nowDate = now.getDate();
// const nowDay = now.getDay(); // 0 (Sunday) to 6 (Saturday)
// const nowHours = now.getHours();
// const nowMinutes = now.getMinutes();
// const nowTime = now.getTime(); // milliseconds since January 1, 1970
// console.log(nowYear, nowMonth, nowDate, nowDay, nowHours, nowMinutes, nowTime);
// LEVEL2
//1
// const base = prompt("Enter base:");
// const height = prompt("Enter height:");
// const area = parseInt(base) * parseInt(height) / 2;
// console.log(`The area of the triangle is ${area}`);
//5
// const x = prompt("Enter x:");
// const y = 2*parseInt(x) - 2;
// console.log(`y = ${y}`);
//13
// const birthYear = prompt("Enter birth year:");
// const myAge = nowYear - parseInt(birthYear);
// if(myAge >= 18){
//     console.log(`You are ${myAge}. You are old enough to drive.`);
// }else{
//     console.log(`You are ${myAge}. You will be allowed to drive after ${18 - myAge} years.`);
// }
//14
// const yearsLived = Number(prompt("Enter number of years you have lived:"));
// if (!isNaN(yearsLived)) {
//   const secondsLived = yearsLived * 365.25 * 24 * 60 * 60;
//   console.log(`You lived ${secondsLived} seconds.`);
// } else {
//   console.log("Please enter a valid number!");
// }
//15
// console.log(`${nowYear}-${nowMonth}-${nowDate} ${nowHours}:${nowMinutes}`)
// LEVEL3
// const pad2 = n => String(n).padStart(2, "0");

// const now = new Date();
// const formatted = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())} ${pad2(now.getHours())}:${pad2(now.getMinutes())}`;
// console.log(formatted);

const now = new Date();
const formatted = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
}).format(now).replace(",", "");

console.log(formatted); // "2025-09-19 09:07"

});