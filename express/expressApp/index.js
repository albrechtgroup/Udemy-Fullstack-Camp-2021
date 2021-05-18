const express = require('express');
const app = express();
const path = require('path');

//////////////////////////////////////////
// const num = Math.floor(Math.random() * 10) + 1;
// const port = 3000

// console.dir(app)

// app.use((req, res) => {
//     console.log("Express Server Loaded!!");
//     // res.send("Request Recieved: This is Response.")
//     res.send('<h1>Adding an H1 Sir.</h1>');
// })

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');



///// "Root Route"  home.ejs
app.get('/', (req, res) => {
    res.render('home');
})

///////////////////////////////////
// 'Subreddit' Route. Express Path Parameters
app.get('/r/:subreddit', (req, res) => {
    res.send("THIS is a SubReddit!")
    console.log(req.params)
})

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!!!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    res.send("WELCOME TO THE COMMENTS PAGE!");
});

////////////////////////////////////
//// /cats /dogs
app.get('/cats', (req, res) => {
    console.log("CAT Request/Rte.")
    res.send("MEOWWW!")
})

app.get('/dogs', (req, res) => {
    res.send("WOOF WOOF ! !")
})

////////////  'catch-all' get request. *last
app.get('*', (req, res) => {
    res.send("NO PATH! NO PATH!!!")
})


app.listen(3000, () => {
    console.log("LISTENING on PORT 3000*");
})

