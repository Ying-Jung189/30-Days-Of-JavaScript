// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
//level1
//1
const pattern = /\d+/g;
const txt =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
const matches = txt.match(pattern).map(Number); //轉成數字
const annualIncome = matches[0] * 12 + matches[1] + matches[2] * 12;
console.log(annualIncome);

//2
const text2 =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.";
const numbers = text2.match(/-?\d+/g).map(Number);
const max = Math.max(...numbers); //展開陣列元素
const min = Math.min(...numbers);
console.log(max - min);

//3
const pattern3 = /^[a-z][a-z0-9_]*$/;
console.log(pattern3.test("first-name"));

//level3
//1
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanAndAnalyze(text) {

  const cleanedText = text.replace(/[^a-zA-Z\s]/g, "");

  //移除空字串，filter(Boolean)可以移除falsy家族(包含空字串)
  const words = cleanedText.split(/\s+/).filter(Boolean);

  if (!words) return "No words found";

  // 2. 統計頻率 (Counting Frequencies)
  const wordCounts = {};
  
  words.forEach(word => {
    // 統一轉為小寫以確保計數準確 (例如 I 和 i 視為同一個字)
    const normalizedWord = word.toLowerCase();
    wordCounts[normalizedWord] = (wordCounts[normalizedWord] || 0) + 1;
  });

  // 3. 排序並找出前三名 (Sorting & Top 3)
  const sortedWords = Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1]) // 依照數量由大到小排序
    .slice(0, 3);                // 取前三名

  // 回傳格式化的結果
  return sortedWords.map(entry => `${entry[0]}: ${entry[1]}`);
}

console.log(cleanAndAnalyze(sentence));
