const skills = ['HTML', 'CSS', 'JS'];
let age = 25;
let isMarried = true;
const student = {
  firstName:'Dawid',
  lastName:'Yankee',
  age:42,
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
    "Swaraj": {
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
    "Harry": {
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
    "Johnny Lake": {
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
    "Abhinav": {
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
    "John": {
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

//converting JSON data to simple JavaScript string
let jsonskills = JSON.stringify(skills);
let jsonage = JSON.stringify(age);
let jsonismarried = JSON.stringify(isMarried);

//filtering out required  data from an object
let jsonstudent = JSON.stringify(student, ['firstName', 'lastName', 'skills']);

console.log(jsonskills, jsonage, jsonismarried, jsonstudent);

//parsing JSON data to a JS object
let obj = JSON.parse(txt);
console.log(obj);

//applying a function to whole data to filter out required data
//we could also add this function as a reviver function in the second parameter of parse()
const mostSkilled = obj => {
  let maxsofar = 0;
  let reference;
  for (let user in obj) {

   if (obj[user].skills.length > maxsofar) {
    maxsofar = obj[user].skills.length;
    reference = user;
   }

  }
  return reference;
}
console.log(mostSkilled(obj));