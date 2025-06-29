// for of 


// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]


for (const num of arr) {
    // console.log(num);
}


const greetings ="Hello World!"
for(const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


// Maps
// maps are known as a unique values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);


for(const [key, value]of map) {
    console.log(key, ':-', value);
}


const myObect = {
    'game1': 'NFS',
    'game2': 'Spiderman'
} 

// for (const [key, value] of myObect) {
//     console.log(key, ':-', value);
// } 
