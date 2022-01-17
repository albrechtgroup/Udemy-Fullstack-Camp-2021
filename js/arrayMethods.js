/////  forEach Method
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
    console.log(n * n);
});
/// for of  reminder
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
const caps = text.map( function (t) {
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
const isEven = num => num % 2 === 0; 
                    /// One-Liner Implicit Return. Without
                    /// ().
//////////////////////////////////////////////////////

const newMovies = movies.map(function(movie) {
    return `${movie.title} - ${movie.score / 10}`
});

//// With Arrrow functions:
const newMovies = movies.map((movie) => {
    return `${movie.title} - ${movie.score / 10}`    
});

//// With Implicit returns:
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
));

/////////////////////////////////////////////////////
/// filter 
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => {
    return n % 2 === 1;
})

const smallNums = nums.filter(n => n < 5); /// [4, 3, 2, 1]

const goodMovies = movies.filter(movie => {
    return movie.score > 80;
})