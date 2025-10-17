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
  const now = new Date();

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formatted = `${dateFormatter.format(now)} ${timeFormatter.format(now)}`;
  return formatted;
}

function randomUserId() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  // let id = "";
  // for (let i = 0; i < 6; i++) {
  //   const randomChar = chars[Math.floor(Math.random() * chars.length)];
  //   id += randomChar;
  // }
  return Array.from(
    { length: 6 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

function signUp() {
  //輸入name, email, password
  const username = prompt("請輸入使用者名稱：");
  const email = prompt("請輸入email：");
  const password = prompt("請輸入密碼：");

  // 檢查是否已註冊（用 some() 更語意化）
  const existed = users.some((user) => user.email === email);
  if (existed) {
    //有的話跳alert
    return "已經註冊";
  } else {
    //沒有的話新增時間、isloggedin、id
    const now = new Date();
    const formattedTime = formatDate();
    const id = randomUserId();
    users.push({
      _id: id,
      username: username,
      email: email,
      password: password,
      createdAt: formattedTime,
      isLoggedIn: true,
    });

    return users;
  }
}

function signIn() {
  const email = prompt("請輸入email：");
  //比對是否符合現有資料
  const user = users.find((user) => user.email === email);
  if (!user) {
    //比對是否符合對應資料
    return "尚未註冊";
  }
  const password = prompt("請輸入密碼：");
  if (password === user.password) {
    return `登入成功，歡迎${user.username}`;
  } else {
    return "密碼錯誤，請重新輸入密碼";
  }
  //否->返回註冊
  //是->抓使用者名字
}
// console.log(signIn())

//3
//a
function rateProduct() {
  const email = prompt("請輸入 email：");
  const user = users.find((u) => u.email === email);
  if (!user) return "尚未註冊，請先註冊帳號";

  const productName = prompt("請輸入產品名稱：");
  const product = products.find((p) => p.name === productName);
  if (!product) return "查無該產品";

  let rate = Number(prompt("請輸入評分 (1~5)："));
  if (isNaN(rate) || rate < 1 || rate > 5) return "評分需為 1~5 的數字";

  const existingRating = product.ratings.find((r) => r.userId === user._id);
  //find回傳符合元素
  if (existingRating) {
    existingRating.rate = rate; // 更新評分
  } else {
    product.ratings.push({ userId: user._id, rate });
  }

  const avgRating =
    product.ratings.reduce((sum, r) => sum + r.rate, 0) /
    product.ratings.length;

  return `您對 ${
    product.name
  } 的評分 ${rate} 分已成功紀錄。平均評分：${avgRating.toFixed(2)}`;
  //toFixed(2)將數字四捨五入到小數點後 2 位
}

// console.log(rateProduct())
//4
function likeProduct() {
  const email = prompt("請輸入 email：");
  const user = users.find((u) => u.email === email);
  if (!user) return "尚未註冊，請先註冊帳號";

  const productName = prompt("請輸入喜歡/取消喜歡的產品名稱：");
  const product = products.find((p) => p.name === productName);
  if (!product) return "查無該產品";
  const existingLiking = product.likes.includes((r) => r.userId === user._id);
  //includes回傳布林
  if (existingLiking) {
    product.likes = product.likes.filter((r) => r.userId !== user._id);
  } else {
    product.likes.push(user._id);
  }
  return product;
}
console.log(likeProduct());
