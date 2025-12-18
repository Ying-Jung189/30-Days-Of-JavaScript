// alert('Open the console and check if the countries has been loaded')
//level1
//2

const numSet = new Set();
for (let i = 0; i <= 10; i++) {
  numSet.add(i);
}
console.log(numSet);
//3
//會刪除但會印出"是否成功刪除"布林值
console.log(numSet.delete(6));
//5
const strSet = new Set(["a", "a", "b", "c", "d", "d", "e"]);
console.log(strSet);
//6
const map = new Map();

countries.forEach((c) => {
  if (c.name) {
    map.set(c.name, c.name.length);
  }
});

console.log(map);

//level2

//level3
//1
// const langNum = new Set()

// countries.forEach(c => {
//   c.languages.forEach(lang => {
//     langNum.add(lang)
//   })
// })

// console.log(langNum.size);

//2
// function mostSpokenLanguages(arr, num) {
//   const langSet = new Set();

//   arr.forEach((c) => {
//     c.languages.forEach((lang) => {
//       langSet.add(lang);
//     });
//   });

//   let arr2 = [];
//   arr.forEach((c) => {
//     c.languages.forEach((l) => {
//       arr2.push(l);
//     });
//   });
//   const totalCounts = [];
//   for (const lang of langSet) {
//     const filterLang = arr2.filter(l => l === lang)
//     totalCounts.push({lang: lang, count: filterLang.length})

//   }
//   totalCounts.sort((a, b)=> b.count - a.count);
  
//   const result = totalCounts.map(item => ({
//   [item.lang]: item.count
//   //[] 代表「這是變數，要先計算」
// }))
// return result.slice(0, num)
// }
//簡潔的寫法
function mostSpokenLanguages(arr, num) {
  const counts = {}

  // 1️⃣ 統計每個語言出現次數
  arr.forEach(c => {
    c.languages.forEach(lang => {
      counts[lang] = (counts[lang] || 0) + 1
    })
  })

  // 2️⃣ 轉成可排序的陣列
  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, num)

  // 3️⃣ 轉成題目要求的格式
  return sorted.map(([lang, count]) => ({
    [lang]: count
  }))
}

console.log(mostSpokenLanguages(countries, 15));
