const jokes = require('give-me-a-joke');
const colors = require('colors');

// To get a random dad joke
jokes.getRandomDadJoke (function(joke) {
    console.log(joke);
});

// To get a random Joke of the Day (Categories allowed: "blonde", "knock-knock",
var category = "blonde";

jokes.getRandomJokeOfTheDay (category, function(joke) {
    console.log(joke);
    // console.log(joke.rainbow);
    // console.log(joke.blue);
});
