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
const map = new Map()

countries.forEach(c => {
  if (c.name) {
    map.set(c.name, c.name.length)
  }
})

console.log(map)

//level2

//level3
//1
const langNum = new Set()

countries.forEach(c => {
  c.languages.forEach(lang => {
    langNum.add(lang)
  })
})

console.log(langNum.size)

//2

