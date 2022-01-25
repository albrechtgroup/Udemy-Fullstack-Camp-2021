///////////////////////////////////////
/// Arrays Methods:
/// Push - add to end of array
/// Pop - remove from end
/// Shift - remove from start of array
/// Unshift - add to start
let clients = ['Ava', 'Tom', 'Nancy'];

clients.push('Kate Dee'); // adds to end


let classmates = ['Jeremy', 'Rob', 'Jason']

classmates.shift('Jeremy'); // removes from
                            // beggining

/////////////////////////////////////////
//// More Methods:
/// join - creates a string from an array

/// concat - merge arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// ['a', 'b', 'c', 'd', 'e', 'f']

/// includes - look for a value
array1.includes('z'); /// false

/// indexOf - just like string.indexOf
array2.indexOf('f');  /// 2 

/// reverse - reverses an array
let fans = ['Ava', 'Tom', 'Nancy'];
fans.reverse(); /// ['Nancy', 'Tom', 'Ava']

/// slice - copies a portion on an array
/// .slice(start, stop)

/// splice - removes/erases elements
const months = ['Jan', 'March', 'April', 'May'];
months.splice(1, 0, 'Feb') // inserts at 
                           // index 1
    /// .splice(start, deleteCount, items)

/// sort - sorts and array


////////////////////////////////////
/// const + arrays:
//  The values can change, as long as the
//  reference remains the same. 


////////////////////////////////////
/// Multidimensional arrays:
/// Nested arrays - we can store arrays 
/// inside of arrays
const colors = [
    ['red', 'crimson'],
    ['orange', 'blood orange'],
    ['yellow', 'gold'],
    ['green', 'olive'],
    ['blue', 'navy blue']
]
colors[2][1]; // 'gold'
colors[0][1]; // 'crimson'


///// 'forEach' Method
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
    console.log(n * n);
});
/// 'for of'  reminder
for (let num of nums) {
    console.log(num);
}
/////
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 85
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(movie);
});
///////////////////////////////////////
/// map Method
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map( function (t) {
    return t.toUpperCase();
});
////

/////////////////////////////////////
/// Arrow Functions
const square = (x) => {
    return x * x;
}

const add = (x, y) => {
    return x + y;
}

const sum = (x, y) => {
    return x + y;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

/////////////////////////////////////////////
/// Arrow Function Implicit Returns:
/// ** CAN ONLY DO WITH ARROW FUNCTIONS! **
const isEven = function (num) {
    return num % 2 === 0;
}                  ////////// Regular function expression
const isEven2 = (num) => {
    return num % 2 === 0;
}                   ///////// arrow function with Parems 
                    /// around the parameters.
const isEven3 = num => {
    return num % 2 === 0;
}                   //// No parems arount the parameters.
// const isEven4 = num => (
//     return num % 2 === 0;
// );                  //// *Implicit Return. Replaces {},
                    ///   with ().
//  const isEven = num => num % 2 === 0; 
                    /// One-Liner Implicit Return. Without
                    /// ().


//////////////////////////////////////////////////////

const newMovies = movies.map(function(movie) {
    return `${movie.title} - ${movie.score / 10}`
});

//// With Arrrow functions:
// const newMovies = movies.map((movie) => {
//     return `${movie.title} - ${movie.score / 10}`    
// });

//// With Implicit returns:
// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ));

/////////////////////////////////////////////////////
/// filter 
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = numbers.filter(n => {
    return n % 2 === 1;
})

const smallNums = numbers.filter(n => n < 5); /// [4, 3, 2, 1]

const goodMovies = movies.filter(movie => {
    return movie.score > 80;
})