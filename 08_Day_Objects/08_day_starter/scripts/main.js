// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

//level 2
// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };
// //1
// //方法1
// const sorted = Object.entries(users).sort(
//   (a, b) => b[1].skills.length - a[1].skills.length
// );
// const [topName, topData] = sorted[0];
// console.log(`技能最多的人是：${topName}`);
// console.log(`他會的技能有：${topData.skills.join(", ")}`);
// //方法2
// const mostSkilledUser = Object.entries(users).reduce(
//   (max, [name, user]) => {
//     return user.skills.length > max.user.skills.length ? { name, user } : max;
//   },
//   { name: "", user: { skills: [] } }
// );
// //[name. user]賦值所以 {name: 'Asab',user: { email: ..., skills: [...] }}

// //2
// const userCount = Object.keys(users).length;
// console.log(userCount);
// const overPointCount = Object.entries(users).filter(
//   ([name, user]) => user.points >= 50
// ).length;

// console.log(overPointCount);

// //3
// const mernDevs = Object.entries(users)
//   .filter(([name, user]) =>
//     ["MongoDB", "Express", "React", "Node"].every((skill) =>
//       user.skills.includes(skill)
//     )
//   )
//   .map(([name]) => name);
// console.log(mernDevs);
// //4
// const newUsers = Object.assign({}, users, {
//   Amy: {
//     email: "amy@amy.com",
//     age: 22,
//   },
// });
// console.log(newUsers);
// //es6寫法
// const newUsers2 = {
//   ...users,
//   Amy: {
//     email: "amy@amy.com",
//     age: 22,
//   },
// };
// //5
// const keys = Object.keys(users);
// console.log(keys);
// //6
// const values = Object.values(users);
// console.log(values);

// //7
// countries.forEach((country) => {
//   console.log(`Country: ${country.name}`);
//   console.log(`Capital: ${country.capital}`);
//   console.log(`Population: ${country.population}`);
//   console.log(`Languages: ${country.languages.join(", ")}`);
//   console.log(""); // 空行分隔不同國家
// });
// const newCountryObject = countries.entries(
//   map((country) => ({
//     name: country.name,
//     capital: country.capital,
//     population: country.population,
//     languages: country.languages,
//   }))
// );

//level3
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

//2
//a
function formatDate(date) {
  let month = date.getMonth() + 1; // getMonth() 從 0 開始
  let day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;

  // 補零
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  const minStr = minutes < 10 ? "0" + minutes : minutes;

  return `${month}/${day}/${year} ${hours}:${minStr} ${ampm}`;
}

function randomUserId(){
 const chars =
    "abcdefghijklmnopqrstuvwxyz0123456789";
        let id = '';
for(let i = 0; i < 6; i ++){
    const randomChar = chars[Math.floor(Math.random() * chars.length)];
    id += randomChar;
}

  return id;
};

function signUp() {
  //輸入name, email, password
  //   const username = prompt("請輸入使用者名稱：");
  const email = prompt("請輸入email：");
  //   const password = prompt("請輸入密碼：");
  //判定是否有相同email->使用filter?
  const emailArray = users.map((data) => data.email);
  const existed = emailArray.includes(email);
  if (existed) {
    //有的話跳alert
    return "已經註冊";
  } else {
    //沒有的話新增時間、isloggedin、id
    const now = new Date();
    const formattedTime = formatDate(now);
    const id = randomUserId();
    console.log(id)


    return "可以註冊";
  }
}
console.log(signUp());
