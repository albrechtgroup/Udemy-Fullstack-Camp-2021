/// Arrow functions & 'this':
const actor = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}


////////////////////////////////////////
/// Default Params:
/// Make 2nd, 3rd etc.parameter, Not 1st*
function multiply(a, b = 3) {
    return a * b;
}

multiply(4); /// 12
multiply(4, 5); /// 20


function greet(person, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${person}${punc}`)
}
greet("Dude"); // Hey there, Dude!
greet("MothaF", "Whassup", "!!!");
// Whassup, MothF!!!


/// Spread in function calls:
/// Expands an iterable(array, string, etc.)
/// into a list of arguements.
const nums = [9, 3, 2, 8];
Math.max(nums); // NaN
// Use spread!
Math.max(...nums); // 67
// Same as calling  Math.max(9,3,2,8)

const digits = [1, 73, 33, 7, 13, 101];
Math.max(...digits); // 101
Math.min(...digits); // 1

console.log(...'hello');
// h e l l o


/// Spread with Array Literals:
/// Create a new array using an existing array.
/// Spreads the elements from 1 array to other
const cats = ["Iny", "Miny", "Moe"];
const dogs = ["Bruno", "Spot"];
/// Combines the arrays, Order Matters
const allPets = [...cats, ...dogs];
/// ["Iny", "Miny", "Moe", "Bruno", "Spot"]

console.log([..."Hello"]);
// ["H", "e", "l", "l", "o"]


/// Spread with Objects:
/// Copies properties from one object into 
/// another object literal.
const feline = {legs: 4, family: 'Felidae'};
const canine = {family: 'Caninae', furry: true};

const dog = {...canine, isPet: true};
// {family: "Caninae", furry: true, isPet: true}

const catDog = {...feline, ...canine};


const dataFromUser = {
    email: "assman373@gmail.com",
    password: "eatThat2",
    username: "tFunk"
}

const newUser = {...dataFromUser, id: 6933, isAdmin: false}


/// Rest Parameters:
function raceResultsf(gold, silver, ...everyoneElse) {
    console.log(`GOLD Medal goes to: ${gold}`)
    console.log(`SILVER Medal goes to: ${silver}`)
    console.log(`And Thank You to everyone else: ${everyoneElse}`)
}


/// Destructuring Arrays:
const scores = [979337, 936859, 881796, 873958, 763980, 693771];

const winner = scores[0];
const runnerUp = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;
/// creats new Variable of position 0,1 & 2 of the Array


/// Destructuring Objects:
const user = {
    username: 'Hancock373',
    email: 'aalbrecht33733@gmail.com',
    password: 'assman373',
    born: 1980,
    died: null,
    state: 'NY'
}

const {username, born, state} = user;
/// creats new Variable of position 0,1 & 2 of Object.


/// Destructuring Params:
