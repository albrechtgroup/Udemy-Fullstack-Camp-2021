// 'for' loop
// Prints 1-10, each on a new line*
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Prints 100-0 in decrements of 10, each on a new line*
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}   /// 100, 90, 80, 70, etc.

// Prints 0-100 in increments of 5, each on a new line*
for (let i = 0; i <= 100; i += 5) {
    console.log(i)
}

// 'for' looping(Iterating) over arrays:
const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
// 0 'lions'
// 1 'tigers'
// 2 'bears'

// Nested 'for' Loops:
for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`     j is: ${j}`)
    }
}

const seatingChart = [
    ['Kristen', 'Eric', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erica']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

// 'for of' loops:
// 'for of' loop for seatingChart:
for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// 'for' loop for subreddits
for(let i = 0; i < subreddits.length; i++){
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

// 'for of' loop for subreddits
for(let sub of subreddits) {
    console.log(sub);
}

// 'while' loop:
let number = 0;
while (number < 10) {
    console.log(number);
    number++
}

let count = 0;
while(count < 13) {
    count++;
    console.log(count)
}

const SECRET = "awa";

let guess = prompt("Enter the secret code.");

while(guess !== SECRET){
    guess = prompt("Enter the secret code.");
}

console.log("CONGRATS, You have guessed the Secret!!!");

// Iterating over objects:
