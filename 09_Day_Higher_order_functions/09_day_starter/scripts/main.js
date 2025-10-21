
//level1
const countriesList = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//6
const newCountriesList = countriesList.map((country) => country.toUpperCase());
console.log(newCountriesList)

//7
const countryLength = countriesList.map((country) => country.length);
console.log(countryLength)

//10
const newProductList = products.map(p => ({[p.product] : p.price}));
//()包住{}讓js不會誤以為是函式括號
//中括號是讓 JavaScript 把 p.product 的值拿來當作 key 名稱
console.log(newProductList);

//13
const char6Countries = countriesList.filter(c => c.length >= 6);
console.log(char6Countries);

//15
const priceList = products.filter(p => p.price !== '' && p.price !== ' ');
console.log(priceList)

//16
function getStringLists(arr){
 const stringArr =  arr.filter(item => typeof item === "string");
 return stringArr
}
console.log(getStringLists([5, 2, 'ggg', 'rgrgrgr']));

//17
const numberArr = [1, 2, 3, 5, 6];
const sum = numberArr.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

//18
const countriesAdd = countriesList.reduce((acc, cur, index) => {
  if (index === countriesList.length - 1) {
    return `${acc}, and ${cur}`;
  } else {
    return `${acc}, ${cur}`;
  }
});

console.log(`${countriesAdd} are north European countries.`);

//24
const result = countriesList.findIndex((name) => name.length === 6)
console.log(result)

//26
const result2 = countriesList.findIndex((name) => name === 'Russia')
console.log(result2)

//level2
//1
const productsList = [
  { product: 'a', price: 50, amount: 4 },
  { product: 'b', price: 60, amount: 6 },
  { product: 'c', price: 70, amount: 4 },
  { product: 'd', price: 40, amount: 7 },
  { product: 'e', price: 35, amount: 2 },
  { product: 'f', price: 45, amount: 9 },
]
const totalPrice = productsList.map(p => p.price*p.amount).reduce((acc, cur) => acc + cur, 0);
console.log(totalPrice);
//更簡短用法
// const totalPrice = productsList.reduce((acc, p) => acc + p.price * p.amount, 0);
