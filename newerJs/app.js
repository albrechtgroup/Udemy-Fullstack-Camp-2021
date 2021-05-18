alert("Connected!!!");
/////////////////////////////////////
/// Default Params:
function multiply(a, b = 1) {
    return a * b;
}

multiply(4); /// 4
multiply(4, 5); /// 20
/////

function greet(person, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${person}${punc}`)
}

////////////////////////////////////////
///  Spread with Array Literals:
const cats = ["Iny", "Miny", "Miny", "Moe"];
const dogs = ["Bruno", "Spot"];

const allPets = [...cats, ...dogs];


///  Spread with Object Literals:
const feline = {legs: 4, family: 'Felidae'};
const canine = {family: 'Caninae', furry: true};

const dog = {...canine, isPet: true};

const catDog = {...feline, ...canine};

////////// Example
const dataFromUser = {
    email: "assman373@gmail.com",
    password: "eatThat2",
    username: "tFunk"
}

const newUser = {...dataFromUser, id: 6933, isAdmin: false}

/////////////////////////////////////////////////
////  Rest Parameters:
function raceResultsf(gold, silver, ...everyoneElse) {
    console.log(`GOLD Medal goes to: ${gold}`)
    console.log(`SILVER Medal goes to: ${silver}`)
    console.log(`And Thank You to everyone else: ${everyoneElse}`)
}

/////////////////////////////////////////////////
//// Destructuring Arrays:
const scores = [979337, 936859, 881796, 873958, 763980, 693771];

const winner = scores[0];
const runnerUp = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;
//// creats new Variable of position 0,1 & 2 of the Array

//// Destructuring Objects:
const user = {
    username: 'Hancock373',
    email: 'aalbrecht33733@gmail.com',
    password: 'assman373',
    born: 1980,
    died: null,
    state: 'NY'
}

const {username, born, state} = user;
//// creats new Variable of position 0,1 & 2 of Object.

//// Destructuring Params:
