// // Change the value of num, so that "YOU GOT ME!" prints out
// const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// // DO NOT TOUCH ANYTHING BELOW (please) 
// if (num <= 100) {
//     if (num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if (num % 2 === 0) {
//             console.log("YOU GOT ME!");
//         }
//     }
// }
//////////////////////////////////////////////////////////


// const mystery = 'Pageof7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE


// // LEAVE THIS CODE ALONE! (pretty please)
// if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
//     console.log("YOU GOT IT!!!");
// }

////////////////////////////////////////////////////////

// DO NOT TOUCH!!! (please)
// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];

// // YOUR CODE GOES BELOW THIS LINE:
''

// airplaneSeats[3].splice(1, 1, 'Hugo');

/////////////////////////////////////////////////////////

//PLEASE DON'T TOUCH THIS LINE!
// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }

// //YOUR CODE GOES DOWN HERE:

// const fullAddress = restaurant.address + ', ' + restaurant.city + ', ' + restaurant.state + ', ' + restaurant.zipcode

///////////////////////////////////////////////////////

// for (let i = 0; i < 13; i++) {
//     console.log("Thirteen Son!")
// }

// Print out "Da ba dee da ba daa" 6 times, using a for loop
// for (let i = 0; i < 6; i++) {
//     console.log("Da ba dee da ba daa")
// }

///////////////////////////////////////////////////////

// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0
// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i);
// }

///////////////////////////////////////////////////////

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR  for LOOP BELOW THIS LINE:
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

/////////////////////////////////////////////////////

// const seatingChart = [
//     ['Kristen', 'Eric', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}-------------`);
//     for (let j = 0; j < row.length; j++)
//     console.log(row[j])
// }

//////////////////////////////////////////////////////
/// Exercise

// function rant(message) {
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }
// rant("I hate beets");

// rant("Fuck Yeah Mann!");

//////////////////////////////////////////////////////

// function isSnakeEyes(num1, num2) {
//     if(num1 === 1 && num2 === 1) {
//         console.log("Snake Eyes!");
//     } else {
//         console.log("Not Snake Eyes!");
//     }
// }

// isSnakeEyes(2, 3);
// isSnakeEyes(1, 1);

///////////////////////////////////////////////////////

// DEFINE YOUR FUNCTION BELOW:
// function multiply(num1, num2) {
//     return (num1 * num2);
// }

// multiply(2, 3);

///////////////////////////////////////////////////

// function isShortsWeather(temp) {
//     if (temp > 75) {
//         return true;
//     }
//     return false;
// }

// isShortsWeather(80);

////////////////////////////////////////////////

// function lastElement(arr) {
//     return arr.length - 1
// }

///////////////////////////////////////////

// const square = function (num) {
//     return num * num;
// }

//////////////////////////////////////////
/// methods exercise:
const square = {
    area: function (num) {
        return num * num;
    },
    perimeter: function (num) {
        return num * 4;
    }
}

////////////////////////////////////
/// Egg Laying exercise:



///////////////////////////////////
/// Map proctice:
const names = ["  timothee", "    darth_hater", "sassyfrassy  ", " elton john  "];
const cleanNames = names.map(function (n) {
    return n.trim();

});

const firstNames = fullNames.map( function(n) {
    return n.first;
});

/////////////////////////////////////
/// Arrow Functions
const greet = (n) => {
    return `Hey ${n}!`;
}

///////////////////////////////////
/// filter exercise:




// //////////////////////////////////

// alert("Document Object Model Son!...");

// //////   Pickles Exercise:
// document.querySelector('span');
// // document.querySelector('span').innerText() = 'Disgusting';

// ///////  Manipulating Attributes Exercise:
// document.querySelector('img').src = 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg';
// document.querySelector('img').alt = "chicken";

// //////   Magical Forest Circle Exercise:
// const container = document.querySelector('div');
// const image = document.querySelector('img');

// container.style.textAlign = 'center';
// image.style.width = '150px';
// image.style.borderRadius = '50%';