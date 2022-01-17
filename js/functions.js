alert("Connected Girlfriend!");

////////////////////////////////////////
/// Arguements
/// ** 'person' is a parameter/ 'Ava' is the arguement


//// String 'template literal'
function greet(person) {
    console.log(`Hi, ${person}!`);
}

greet('Ava'); ////"Hi, Ava!"

////////////////////////////////////////////
/// 'Null' and 'Undefined'

/// Null = Intentional abscense of any value
///      = Must be assigned

//// Undefined = Variables that do not have 
///      a defined value are undefined



///////////////////////////////////////
/// function Statement

function add(x, y){
    return x + y;
}

add(3,4); /// 7

////////////////////////////////////////
/// function Expression

// const add2 = function(x, y) {
//     return x + y;
// }

// add2(3,4); /// 7

//////////////////////////////////////////////
/// Higher Order functions
/// * Accept other functions as Arguements
/// roll die function

// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// callTwice(rollDie);

///////////////////////////////////////////////////
/// * function as a Return value

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function() {
//             console.log("Congrats, I am a Good Function So,");
//             console.log("YOU WIN A MILLION $DOLLAR$!!!");
//         } 
//     } else {
//         return function () {
//             alert("YOU HAVE BEEN INFECTED WITH COVID-19");
//             alert("Your Computer will Self-Disruct in 30 Seconds.");
//             alert("Your Computer will Self-Disruct in 30 Seconds.");
//             alert("Your Computer will Self-Disruct in 30 Seconds.");
//             alert("Your Computer will Self-Disruct in 30 Seconds.");
//             alert("Your Computer will Self-Disruct in 30 Seconds.");
//         }
//     }
// }

// const mystery = makeMysteryFunc();

//////////////////////////////////////////////////
/// defining Methods:

// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     }, 
//     cube: function (num) {
//         return num ** 3;
//     }
// }

//////////////////////////////////////////////////
/// keyword 'this'

const cat = {
    name: 'Chloe',
    color: 'Calico',
    breed: 'Unknown',
    meow() {
        console.log('Meow Meow Meow');
    }
}

//////////////////////////////////////////////////
/// setTimeout & setInterval
setTimeout(() => {
    alert("setTimeout, 3 seconds");
}, 3000)

/////////////////////////////////////////////////
/// Arrow functions & 'this':
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}
