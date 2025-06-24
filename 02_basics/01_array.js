// array

const myArr = [0, 1, 2 ,3 , 4, 5]
const myHeros = ["elonmusk", "deanerys"]

const myArr2 = new Array(1, 4, 2, 7)
// console.log(myArr[0]); 



//----------------------Array methods------------------------------

// 📏 Basic Property	
// length -	Returns the number of elements in the array



// ➕ Adding Elements	
// push() -	    Adds element(s) to the end
// unshift() -	Adds element(s) to the beginning


// ➖ Removing Elements	
// pop() -	    Removes the last element
// shift() -	Removes the first element


// 🪄 Modification	
// splice() -	    Adds/removes elements from any position
// fill() -	        Fills elements with a static value
// copyWithin() -	Copies part of array to another position


// 🔍 Searching	
// indexOf() -	    Finds first index of a value
// lastIndexOf() -	Finds last index of a value
// includes() -	    Checks if a value exists


// 🔄 Transformation	
// map() -	    Creates a new array by transforming each element
// filter() -	Creates new array with elements that pass a test
// reduce() -	Reduces array to a single value
// forEach() -	Executes a function on each element (no return)
// flat() -	    Flattens nested arrays
// flatMap() -	Maps and flattens in one go
// reverse() -	Reverses the array in place
// sort() -	    Sorts array elements


// 🔁 Combining & Extracting	
// concat() -	Joins two or more arrays
// slice() -	Extracts a portion into a new array
// join() -	    Joins all elements into a string
// toString() -	Converts array to string


// 🧪 Testing	
// some() - 	Checks if any element meets a condition
// every() -	Checks if all elements meet a condition


// 🔍 Finding Elements	
// find() -	        Returns first matching element
// findIndex() -	Returns index of first match


// 📚 Iteration	
// entries() -	Returns iterator of [index, value] pairs
// keys() -	    Returns iterator of keys (indexes)
// values() -	Returns iterator of values
// from() -	    Creates array from any iterable or array-like
// isArray() -	Checks if a value is an array




// myArr.push(8)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()
// myArr.splice(4)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

 
// splice - Affect original array
// slice - Does not affect original array


console.log("A ", myArr);


const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);

console.log(myn2);