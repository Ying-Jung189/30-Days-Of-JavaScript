//level1
const countriesList = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//6
const newCountriesList = countriesList.map((country) => country.toUpperCase());
console.log(newCountriesList);

//7
const countryLength = countriesList.map((country) => country.length);
console.log(countryLength);

//10
const newProductList = products.map((p) => ({ [p.product]: p.price }));
//()包住{}讓js不會誤以為是函式括號
//中括號是讓 JavaScript 把 p.product 的值拿來當作 key 名稱
console.log(newProductList);

//13
const char6Countries = countriesList.filter((c) => c.length >= 6);
console.log(char6Countries);

//15
const priceList = products.filter((p) => p.price !== "" && p.price !== " ");
console.log(priceList);

//16
function getStringLists(arr) {
  const stringArr = arr.filter((item) => typeof item === "string");
  return stringArr;
}
console.log(getStringLists([5, 2, "ggg", "rgrgrgr"]));

//17
const numberArr = [1, 2, 3, 5, 6];
const sum = numberArr.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

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
const result = countriesList.findIndex((name) => name.length === 6);
console.log(result);

//26
const result2 = countriesList.findIndex((name) => name === "Russia");
console.log(result2);

//level2
//1
const productsList = [
  { product: "a", price: 50, amount: 4 },
  { product: "b", price: 60, amount: 6 },
  { product: "c", price: 70, amount: 4 },
  { product: "d", price: 40, amount: 7 },
  { product: "e", price: 35, amount: 2 },
  { product: "f", price: 45, amount: 9 },
];
const totalPrice = productsList
  .map((p) => p.price * p.amount)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalPrice);
//2
const totalPrice2 = productsList.reduce(
  (acc, p) => acc + p.price * p.amount,
  0
);

//3
const categorizeCountries = countries
  .filter((c) => c.name.includes("land"))
  .map((c) => c.name);
console.log(categorizeCountries);

//4
function countCountryInitials(countries) {
  const letterCount = countries.reduce((acc, cur) => {
    const firstLetter = cur.name[0].toUpperCase();
    acc[firstLetter] = (acc[firstLetter] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(letterCount).map(([letter, count]) => ({
    letter,
    count,
  }));
}
console.log(countCountryInitials(countries));

//5
function getFirstTenCountries(countries) {
  const newCountries = countries.slice(0, 10).map((c) => c.name);
  return newCountries;
}
console.log(getFirstTenCountries(countries));

const firstTenCountries = countries
  .filter((_, index) => index < 10)
  .map((c) => c.name); //_是指不使用該參數

//7
function findMostUsedLetter() {
  const letterList = countCountryInitials(countries).sort(
    (a, b) => b.count - a.count
  );
  return letterList[0]?.letter || null;
}
console.log(findMostUsedLetter());

//level3
//1
//[...countries]複製原陣列，原本的 countries 保持不變
const sortCountriesName = [...countries].sort((a, b) =>
  a.name.localeCompare(b.name)
);
const sortCountriesCapital = [...countries].sort((a, b) => {
  if (!a.capital) return 1; // a 沒值 → 排後
  if (!b.capital) return -1; // b 沒值 → a 排前
  return a.capital.localeCompare(b.capital);
});
//字串排序 → 用 localeCompare
const sortCountriesPopulation = [...countries].sort(
  (a, b) => b.population - a.population
);
console.log(sortCountriesCapital);

//2
function mostSpokenLanguages(countries, count) {
  const langCount = countries.reduce((acc, cur) => {
    cur.languages.forEach((lang) => {
      lang = lang.trim();
      acc[lang] = (acc[lang] || 0) + 1;
    });
    return acc;
  }, {});

  const langOrder = Object.entries(langCount)
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count);

  return langOrder.slice(0, count);
}

console.log(mostSpokenLanguages(countries, 10));

