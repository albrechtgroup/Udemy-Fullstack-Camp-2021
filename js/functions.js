/// 'Null' and 'Undefined':

/// Null = Intentional abscense of any value
///      = Must be assigned

/// Undefined = Variables that do not have 
///      a defined value are undefined


/// Comparison Operators: 
//  > greater than, < less than, 
//  >= greater than or equal to
//  <= less than or equal to
//  == equality, != not equal
//  === strict equal, !== strict non-equal

//  ===, !== *Always use Tripe equal* 
/////////////////////////////////////////////////


/// 'if' statement:
let rating = 5;

if (rating === 5) {
    console.log("You are a Superstar!")
}


/// 'else if' statement:
let stars = 4;

if (stars === 4) {
    console.log("You have received 4 STARS!!!")
} else if (stars === 3) {
    console.log("Not quite, you've only received 3 Stars.")
}

const dayOfWeek = "Friday";

if (dayOfWeek === "Monday") {
    console.log("Ugghhh!")
} else if (dayOfWeek === "Friday") {
    console.log("WooHoooo, T.G.I.F.!!!")
}


/// 'else'
let rate = -99;

if (rate === 3) {
    console.log("You are a SuperStar!");
} else if (rate === 2) {
    console.log("Meets Expectations.");
} else if (rate === 1) {
    console.log("Needs Improvement");
} else {
    console.log("INVALID RATE.");
}


let random = Math.random();
if (random < 0.5) {
    console.log("Less than 0.5")
} else {
    console.log("Greater than 0.5")
}
console.log(random);


/// Nesting Conditionals
const password = prompt("Please enter your password.");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include spaces
    if (password.indexOf(' ') === -1) {
        console.log("You are Logged IN!");
    } else {
        console.log("Password cannot contain Spaces!")
    }
} else {
    console.log("Password Too Short! Must be 6+ characters.")
}


/// Truthy or Falsy
const userInput = prompt("Enter Something");

if (userInput) {
    console.log("TRUTHY")
} else {
    console.log("Falsy")
}


/// Logical Operators:
///  &&  and
///  ||  or
const age = 77;
if (age < 5 || age >= 65) {
    console.log("Admission: FREE!")
} else if (age < 10) {
    console("Admission: $10")
} else if (age < 65) {
    console.log("Admission: $20")
} else {
    console.log("Invalid AGE!")
}

/// !  not:
///  !false   // true
///  !true    // false


/// Function Object Literals:
/// key: value pairs
const fitBitData = {
    totalSteps: 308727,
    totalMiles: 173.34,
    avgCalorieBurn: 3113,
    workoutsThisWeek: '5 of 7',
    aveGoodSleep: '7.13'
};

fitBitData.avgCalorieBurn // 3113

/// Also object, just on one line
const person = {firstName: 'Mick', lastName: 'Jagger'};

/// Accessing data out of an Object:
person.lastName // 'Jagger'
/// [" "] If you're using something dynamic
/// like a variable, use below:
person["firstName"] // 'Mick'

/// Changing/Updating values in Object
person.firstName = 'Dick' 

/// Adding key: value to and Object
fitBitData.heartRate = 87;

/// Nesting Arrays & Objects:
const chickens = {
    firstName: 'Andy',
    lastName: 'Watkins',
    assets: ['T', 'A'],
    exams: {
        midterm: 92,
        final: 97
    }
};


/// Simple first function:
/// Defining function 'singSong'
function singSong() {
    console.log("Hell yeah man!!")
}
/// run/execute the function
singSong();


/// Arguements:
/// 'person' is a parameter/ 
/// 'Andy' is the arguement
//// String `template literal`
function greet(person) {
    console.log(`Hi, ${person}!`);
}

greet('Andy'); /// "Hi, Andy"
greet('Mandy'); /// "Hi, Mandy!"

/// Multiple arguements:
function fullName(firstName, lastName) {
    console.log(`Hi, my name is ${firstName} ${lastName}.`);
}

fullName('Andy', 'Albrecht');
fullName('Lonely', 'Island');


/// function that repeats the parameter,
/// a number of times.
function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat('Sup dude, ', 7);


/// function Statement:
/// the 'return' keyword:
function add(x, y){
    return x + y;
}

add(3,4); /// 7


/// Function Scope:
let totalEggs = 0;
function collectEggs() {
    totalEggs = 7;
}
console.log(totalEggs); /// 0
collectEggs();          /// Executing func.
console.log(totalEggs); /// 7 


/// 'Scarlet Macaw' is a Global variable
let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';
}

console.log(bird); /// 'Scarlet Macaw'


let brd = 'Mandarin Duck';
function brdWatch(){
    let brd = 'Golden Pheasant';
    brd; // 'Golden Pheasant'
    /// brd is scoped to brdwatch function
}

bird; // 'Mandarin Duck'


/// Block Scope:
/// Common with conditionals and loops
/// blocked within { }
let radius = 7;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'Hiii!';
}

console.log(radius); // 7
//  console.log(msg); // Uncaught referece not defined 
// const PI and let msg are scope in the 
// conditional block..


/// Lexical Scope:
/// inner has lexical scope to its parent outer
function outer() {
    let hero = "Superman";

    function inner() {
        let cryForHelp = `${hero}, please save me!`
        console.log(cryForHelp); 
    }

    inner();
}


/// function Expression:
/// In these we are defining a function to
/// a variable.
const add2 = function(x, y) {
    return x + y;
}

add2(3,4); /// 7


const square = function (num) {
    return num * num;
}
square(7); // 49


/// Higher Order functions
/// *Accept other functions as Arguements
/// Return a function

/// roll die function
function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie);


/// function as a Return value
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log("Congrats, I am a Good Function So,");
            console.log("YOU WIN A MILLION $DOLLAR$!!!");
        } 
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED WITH COVID-19");
            alert("Your Computer will Self-Disruct in 30 Seconds.");
            
        }
    }
}

const mystery = makeMysteryFunc();
mystery();


/// defining Methods:
/// Add functions as properties in object.
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    }, 
    cube: function (num) {
        return num ** 3;
    },
    add: function (num) {
        return num + num;
    }
}


/// Every method is a function; but not every
/// function is a method*


/// keyword 'this'
/// Use the keyword 'this' to access properties
/// on the same object.

const cat = {
    name: 'Chloe',
    color: 'Calico',
    breed: 'Unknown',
    meow() {
        console.log('Meow Meow Meow');
    }
}


const identity = {
    first: 'Andy',
    last: 'Albrecht',
    fullName() {
        return `${this.first} ${this.last}`
    }
}
identity.fullName(); // Andy Albrecht
identity.last = "Milano";
identity.fullName(); // Andy Milano

/// The value of 'this' depends on how we 
/// actually call the function*


/// Try/Catch:
try {
    hello.toUppercase();
} catch {
    console.log("ERROR!!!!");
}
