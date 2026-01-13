const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
//level1
//1
const skillsTxt = JSON.stringify(skills);
console.log(skillsTxt);
//2
const ageTxt = JSON.stringify(age);
console.log(ageTxt);
//3
const isMarriedTxt = JSON.stringify(isMarried);
console.log(isMarriedTxt);
//4
const studentTxt = JSON.stringify(student);
console.log(studentTxt);

//level2
const studentFilter = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4);
console.log(studentFilter);

//level3
//1
const info = JSON.parse(txt);
console.log(info);
//2
// const sortedInfo = Object.entries(info).sort((a, b) =>
//     b[1].skills.length - a[1].skills.length
// );
const entries = Object.entries(info);
const [topName, topUser] =entries.reduce((max, cur) =>{
    if(cur[1].skills.length > max[1].skills.length){
        return cur;
    }else{
        return max;
    }
})
console.log(`The person who has the most skill is ${topName}`)