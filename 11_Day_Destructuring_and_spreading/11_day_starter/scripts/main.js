// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
// level1
// 1
const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
//3
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}

//level2
const arr = users.filter((u) => u.skills.length < 2);
for (const { name } of arr) {
  console.log(name);
}

//level3
//1
for (const { name, capital, population, languages } of countries) {
  // console.log( name, capital, population, languages)
}
//2
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);
//3
function convertArrayToObject(arr) {
    const newArr = []
  for (const [name, skill, scores] of arr) {
    const ob = {name, skill, scores}
    //const ob = { name: name, skill: skill, scores: scores }縮寫
    newArr.push(ob)
  }
  console.log(newArr)

}

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

convertArrayToObject(students)
