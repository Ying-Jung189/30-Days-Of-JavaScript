// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')
//level1
//11
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(companies)
console.log(companies.sort());
//14
const newCompanies =[]
for (const company of companies) {
  let count = 0;

  for (const char of company.toLowerCase()) {
    if (char === "o") count++;
  }

  if (count <= 1) {
    newCompanies.push(company);
  }
}
console.log(newCompanies);

//16
// console.log(companies.reverse());
//17
console.log(companies.slice(3, companies.length))
//20
// companies.shift()
// console.log(companies)
//21
// const middleIndex = Math.floor(companies.length / 2);
// companies.splice(middleIndex, 1);

// console.log(companies);
//23
companies.splice(0, companies.length)
console.log(companies)

//level2
//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// \W+ 代表非英數字 (包含空格、標點)
//.filter(Boolean) 用來移掉空字串（有時連續標點會產生空字串）。
const textArray = text.split(/\W+/).filter(Boolean); 
console.log(textArray);
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(4,1);
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart);
//4
if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA');
}else{
    countries.push('Ethiopia');
}
// console.log(countries);
//level3
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
function getMiddle(arr) {
  const len = arr.length;

  if (len === 0) return ; // 空陣列直接回傳空陣列

  const middleIndex = Math.floor(len / 2);

  if (len % 2 === 0) {
    // 偶數 → 取兩個中間值
    return((arr[middleIndex] + arr[middleIndex - 1]) / 2)
  } else {
    // 奇數 → 取唯一中間值
     return(arr[middleIndex]);
  }
}

console.log( getMiddle(ages)); 

let totalAge = 0;
for(const age of ages){
    totalAge += age;
}
let averageAge = totalAge / ages.length;
console.log(averageAge);

const average = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log(average); 

const sortAge = ages.sort();
console.log(sortAge[0], sortAge[sortAge.length - 1]);

//2
console.log(countries.slice(0,10));
function getMiddle2(arr) {
  const len = arr.length;

  if (len === 0) return []; // 空陣列直接回傳空陣列

  const middleIndex = Math.floor(len / 2);

  if (len % 2 === 0) {
    // 偶數 → 取兩個中間值
    return ([middleIndex - 1],[middleIndex]);
  } else {
    // 奇數 → 取唯一中間值
    return [middleIndex];
  }
}
let arrMiddleIndex = getMiddle2(countries)[0];
console.log(countries[arrMiddleIndex]);
const firstHalf = countries.splice(0, arrMiddleIndex);
console.log(firstHalf);
console.log(countries)
