const name = "dalip"
const repoCount = 50

// console.log(name + repoCount + "value"); // Outdated synatx

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // Modern way


const gameName = new String('dalip')


// ================= ALL String Methods ==================

// Basic Property
// length – Returns the total number of characters in a string.


// ✂️ Extracting Parts of a String
// slice() – Extracts a section of a string.

// substring() – Similar to slice, but cannot use negative values.

// substr() – Extracts a part of a string based on start position and length (deprecated).


// 🔍 Searching in a String
// indexOf() – Finds the first occurrence of a specified value.

// lastIndexOf() – Finds the last occurrence of a specified value.

// includes() – Checks whether a string contains a specified value.

// startsWith() – Checks if a string starts with a given substring.

// endsWith() – Checks if a string ends with a given substring.


// 🔄 Modifying a String
// toUpperCase() – Converts the string to uppercase.

// toLowerCase() – Converts the string to lowercase.

// trim() – Removes spaces from both ends of the string.

// trimStart() – Removes spaces from the beginning.

// trimEnd() – Removes spaces from the end.

// replace() – Replaces the first match with another string.

// replaceAll() – Replaces all matches with another string.


// 🧱 Splitting and Joining
// split() – Splits the string into an array using a separator.

// concat() – Combines two or more strings.


// 🔠 Working with Characters
// charAt() – Returns the character at a specific index.

// charCodeAt() – Returns the Unicode value of the character.

// codePointAt() – Returns the full Unicode code point (useful for emojis).

// 🔧 Other Useful Methods
// repeat() – Repeats the string a specified number of times.

// match() – Retrieves matches using a regular expression.

// search() – Searches for a match using a regular expression.

// padStart() – Pads the start of the string to a certain length.

// padEnd() – Pads the end of the string to a certain length.





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