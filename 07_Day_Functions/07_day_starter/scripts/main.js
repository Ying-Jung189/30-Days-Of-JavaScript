// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
//level1
//1
//IIFE
// (function () {
//   console.log("John", "Wick");
// })();
// //2
// function fullName(firstName, lastName) {
//   let fullName = firstName + " " + lastName;
//   return fullName;
// }
// console.log(fullName("marry", "jan"));
// //3
// function addNumber(a, b) {
//   let sum = a + b;
//   return sum;
// }
// console.log(addNumber(566, 588));
// //10
// const speed = (distance, time) => distance / time;
// console.log(speed(1100, 90));
// //11
// const weight = (mass, gravity = 9.81) => mass * gravity;
// console.log(weight(65));
// //13
// function BMITest(weight, height) {
//   // 如果 height 看起來像公分（> 3），就轉成公尺
//   const heightM = height > 3 ? height / 100 : height;
//   let BMI = weight / heightM ** 2;
//   const rounded = Math.round(BMI * 100) / 100; // 四捨二位小數

//   console.log(rounded);
//   if (rounded < 18.5) {
//     console.log("Underweight");
//   } else if (rounded > 18.5 && rounded < 24.9) {
//     console.log("Normal weight");
//   } else if (rounded > 25 && rounded < 29.9) {
//     console.log("Overweight");
//   } else if (rounded > 30) {
//     console.log("Obese");
//   }
//   return rounded;
// }
// BMITest(48, 163);
// //15
// const findMax = (...args) => {
//   let arr = [];
//   for (num of args) {
//     arr.push(num);
//   }
//   //不加會以字串比大小，則5會在10後面
//   arr.sort((a, b) => a - b); // 這裡加比較函式
//   console.log(arr);
//   let maxNum = arr[arr.length - 1];
//   return maxNum;
// };
// console.log(findMax(0, 10, 5));
// console.log(findMax(0, -10, -2));

// //使用Math.max(...args)
// const useMax = (...args) => Math.max(...args);

// console.log(useMax(0, 10, 5)); // 10
// console.log(useMax(0, -10, -2)); // 0

// //level2
// //1
// function solveLinEquation(a, b, c, y) {
//   let x = (-b * y - c) / a;
//   return x;
// }
// console.log(solveLinEquation(5, 3, 4, 10));

// //2
// // function solveQuadEquation(a, b, c){
// //     let x = 0
// //     x = (-a* x ** 2 - c) / b;
// //     return x;
// // }
// // console.log(solveQuadEquation(1, 4, 4));
// // console.log(solveQuadEquation(1, 7, 12)) ;
// //3
// function printArray(...args) {
//   for (num of args) {
//     console.log(num);
//   }
// }
// const arr2 = [123, 223, 333, 433, 544];
// printArray(arr2);
// //4
// function showDateTime() {
//   let now = new Date();
//   const formatted = new Intl.DateTimeFormat("en-US", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: false,
//   })
//     .format(now)
//     .replace(",", "")
//     .replace("-", "/");

//   return formatted;
// }
// console.log(showDateTime());
// //5
// function swapValues(a, b) {
//   return [b, a];
// }

// console.log(swapValues(3, 4));

// //6
// function reverseArray(arr) {
//   const reverseArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
//   }
//   return reverseArr;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray(["A", "B", "C"]));

// //8
// function addItem(arr) {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// const arrayTest = [1, 1, 3, 6, 5, 45];
// console.log(addItem(arrayTest));
// //9
// function removeItem(arr) {
//   while (arr.length > 0) {
//     arr.pop();
//   }
//   return arr;
// }

// console.log(removeItem([22, 33, 44, 55, 66])); // []
// //11
// function sumOfEven(arr) {
//   let sum = 0;
//   for (let i = 1; i <= arr.length - 1; i += 2) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumOfEven([1, 2, 1, 5, 1, 5, 1]));
// //13
// function evensAndOdds(num, includeZero = true) {
//   if (!Number.isInteger(num) || num <= 0) {
//     return "Error: Input must be a positive integer";
//   }

//   let oddNum, evenNum;

//   if (includeZero) {
//     oddNum = Math.ceil(num / 2);
//     evenNum = Math.floor(num / 2) + 1;
//   } else {
//     //math.ceil向上取整
//     oddNum = Math.ceil(num / 2);
//     //math.floor向下取整
//     evenNum = Math.floor(num / 2);
//   }

//   return `The number of odds are ${oddNum}, the number of evens are ${evenNum}`;
// }
// //15
// const randomUserId = () => {
//   let randomNum = Math.floor(Math.random() * 1000);
//   const lowerChars = [];

//   // A ~ Z 的編碼是 65 ~ 90
//   for (let i = 65; i < 91; i++) {
//     let char = String.fromCharCode(i);
//     lowerChars.push(char.toLowerCase());
//   }
//   let randomChar = lowerChars[Math.floor(Math.random() * 26)];
//   console.log(randomChar);
//   let id = randomChar.concat(randomNum);

//   return id.toString().padStart(6, "0");
// };
// console.log(randomUserId());

// function randomUserIp() {
//   const segments = [];
//   for (let i = 0; i < 4; i++) {
//     segments.push(Math.floor(Math.random() * 256)); // 0 ~ 255
//   }
//   return segments.join(".");
// }

// console.log(randomUserIp());

// //17
// function randomHexNumberGenerator() {
//   //顏色色碼範圍0-9 a-f
//   const hexChars = "0123456789ABCDEF";
//   let hex = "#";
//   for (let i = 0; i < 6; i++) {
//     //用+=就可以串接字串
//     hex += hexChars[Math.floor(Math.random() * hexChars.length)];
//   }
//   return hex;
// }

// console.log(randomHexNumberGenerator());
//level3
//1
const wordCount = prompt("請輸入id字數:");
const idNum = prompt("請輸入id數量:");
