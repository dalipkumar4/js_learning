const name = "dalip"
const repoCount = 50

// console.log(name + repoCount + "value"); // Outdated synatx

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // Modern way


const gameName = new String('dalip')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName. length);
// console.log(gameName. toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,2)
// console.log(newString);

const anotherString = gameName.slice(0,2)
// console.log(anotherString);

const newStringOne = "  dalip  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dalip.com/dalip%30kumar"

console.log(url.replace('%30', '-'))


console.log(url.includes('sundar'))


console.log(gameName.split('-'))