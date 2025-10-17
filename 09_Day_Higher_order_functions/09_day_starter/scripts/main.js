
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