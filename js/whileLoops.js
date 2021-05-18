let count = 0;
while(count < 13) {
    count++;
    console.log(count)
}

///////////////////////

// while(!gameOver) {
//     // player 1
//     // player 2
// }

////////////////////////

const SECRET = "BabyMayla";

let guess = prompt("Enter the sectret code.");

while(guess !== SECRET){
    guess = prompt("Enter the secret code.");
}

console.log("CONGRATS, You have guessed the Secret!!!");