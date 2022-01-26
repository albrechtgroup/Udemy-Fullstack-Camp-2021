//////////////////////////////////////////
/// 'for' loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}   /// 100, 90, 80, 70, etc.


/// 'for' looping(Iterating) over arrays:
const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
// 0 'lions'
// 1 'tigers'
// 2 'bears'


/// Nested 'for' Loops:
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


const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

/// 'for' loop for subreddits
for(let i = 0; i < subreddits.length; i++){
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

/// 'for of' loop for subreddits
for(let sub of subreddits) {
    console.log(sub);
}


/////////////////////////////////////////
/// 'while' loop:
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

let guess = prompt("Enter the sectret code.");

while(guess !== SECRET){
    guess = prompt("Enter the secret code.");
}

console.log("CONGRATS, You have guessed the Secret!!!");




