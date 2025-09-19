// this is your main.js script
//level1
//1
let a = 4;
let b = 3;
if(a > b){
    console.log('a is greater than b');
}
a > b? console.log('a is greater than b'): console.log('a is less than b');
//level2
//1
// let num = Number(prompt('Enter number'));

// if (num >= 80 && num <= 100) {
//   console.log('A');
// } else if (num > 70 && num <= 80) {
//   console.log('B');
// } else if (num > 60 && num <= 70) {
//   console.log('C');
// } else if (num > 50 && num <= 60) {
//   console.log('D');
// } else if (num >= 0 && num <= 50) {
//   console.log('E');
// } else {
//   console.log('out of score');
// }
//switch不適合用數字範圍
//level3
let enterMonth = prompt('Enter a month').toUpperCase();

switch (enterMonth) {
  case 'JANUARY':
  case 'FEBRUARY':
  case 'DECEMBER':
    console.log('winter');
    break;
  default:
    console.log('not winter');
}
