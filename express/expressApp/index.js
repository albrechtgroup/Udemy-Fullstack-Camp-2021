const express = require('express');
const app = express();
const path = require('path');

/// express.static() is what's called 
/// 'middleware'- Executes every request
/// Runs between the request coming in, and
/// the response going out.
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

/// 'Subreddit' Route. Express Path Parameters
app.get('/r/:subreddit', (req, res) => {
    console.log(req.params)
    const { subreddit } = req.params;
    res.send(`<h1>You are browsing the ${subreddit} Subreddit Parameter.</h1>`) 
})

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!!!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    res.send("WELCOME TO THE COMMENTS PAGE!");
});



//////////// Another Example //////////////
/// "Root Route"  home.ejs that's connected.
app.get('/', (req, res) => {
    res.render('home');
})

/// /cats /dogs routes
app.get('/cats', (req, res) => {
    console.log("CAT Request/Rte.")
    res.send("MEOWWW!")
})

app.get('/dogs', (req, res) => {
    res.send("WOOF WOOF ! !")
})

/// * = 'catch-all' get request. 
/// Comes before all other routes so
/// put last.
app.get('*', (req, res) => {
    res.send("NO PATH! NO PATH!!!")
})


/// app.listen for Subreddit & other example.
app.listen(3000, () => {
    console.log("LISTENING on PORT 3000*");
})

