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


////////////////////////////////////////
///// 'forEach' Method
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
    console.log(n * n);
    // 81, 64, 49, 36, 25, 16, 9, 4, 1
});


/// 'for of' reminder
for (let num of nums) {
    console.log(num);
}


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

/// 'forEach' on movies array:
movies.forEach(function (movie) {
    console.log(movie);
});


///////////////////////////////////////
/// map Method:
/// Creates a new array with the results of
/// calling a callback on every element in 
/// the array.
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map( function (t) {
    return t.toUpperCase();
});
texts; // ["rofl", "lol", "omg", "ttyl"]
caps; // ["ROFL", "LOL", "OMG", "TTYL"]


const digits = [1, 2, 3, 4];
const doubleDigits = digits.map(function(num) {
    return num * 2;
})
doubleDigits; // [2, 4, 6, 8]


/// .map on movies array above
const movieRating = movies.map(function(movie) {
    return `${movie.title} - ${movie.score / 10}`;
});
movieRating; //


////////////////////////////////////////
/// Arrow Functions:
const square = (num) => {
    return num * num;
}

const add = (x, y) => {
    return x + y;
}

const sum = (x, y) => {
    return x + y;
}

/// Can get rid of parenthesis when there is 
/// only one arguement:
const sqr = x => {
    return x * x;
}

/// arrow function with No arguements:
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}


/////////////////////////////////////////////
/// Arrow Function Implicit Returns:
/// *CAN ONLY DO WITH ARROW FUNCTIONS! **
/// *All of the functions below do the 
/// same thing.

/// Regular function expression:
const isEven = function (num) {
    return num % 2 === 0;
}       
/// Arrow function with parenthesis
/// around the parameters.
const isEven2 = (num) => {
    return num % 2 === 0;
}            
//// No parenthesis around the parameters.       
const isEven3 = num => {
    return num % 2 === 0;
} 
/// *Implicit Return. Replaces {},
/// with (). *ALSO, no longer use 'return'              
const isEven4 = num => (
    num % 2 === 0
);                
/// One-Liner Implicit Return. Without
/// (). *ALSO, no longer use 'return'
const isEven5 = num => num % 2 === 0; 

/// Shorthand add 
const addAgain = (a, b) => a + b;
                   

/// .map movies arrray w/ Arrrow functions:
const newMovies = movies.map((movie) => {
    return `${movie.title} - ${movie.score / 10}`    
});

/// .map movies w/ Implicit returns: Shorter
const newFlix = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
));


/////////////////////////////////////////
/// setTimeout & setInterval
setTimeout(() => {
    alert("setTimeout, 2 seconds");
}, 2000)


/////////////////////////////////////////////////////
/// .filter method:
/// Creates a New array w/ all elements that
/// pass the test implemented by the provided
/// function.
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = numbers.filter(n => {
    return n % 2 === 1;
})
/// Our callback returns true or false, if 
/// true, 'n' is added to filtered array.
const smallNums = numbers.filter(n => n < 5); /// [4, 3, 2, 1]

/// .filter method on movies array above.
const goodMovies = movies.filter(movie => {
    return movie.score > 80;
})
/// Implicit shorthand
const goodMovies2 = movies.filter(m =>  m.score > 80);
const recentMovies = movies.filter(m => m.year > 1990);

/// Combine .map and .filter:
const goodTitles = goodMovies.map(m => m.title)


/////////////////////////////////////////
/// 'Some' and 'Every':
/// *Always return True or False (Boolean)

/// .some
const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];
/// Are there any words longer than 4 characters?
words.some(word => {
    return word.length >4;
}) // true

/// Do any words start with 'Z'?
words.some(word => word[0] === 'Z');
// false

/// Do any words contain 'cake'?
words.some(w => w.includes('cake')) 
// true

/// .every
words.every(word => {
    return word.length === 3;
}) // true

words.every(word => word[0] === 'd');
   // false


////////////////////////////////////////
/// Reduce method:
/// Executes a reducer function on each 
/// element of the array, resulting in 
/// a single value.
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});


const prices = [9.99, 1.5, 19.99, 49.99, 30.50];
const total = prices.reduce((total, price) => {
    return total + price;
}); // 111.97


/////////////////////////////////////////
/// Arrow functions & 'this':
/// 'this' refers to the window object
/// *(Where it was made, Not execution)

/// WithOut Arrow func.
/// 'this' refers to how the func is Exucuted
const actor = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}



