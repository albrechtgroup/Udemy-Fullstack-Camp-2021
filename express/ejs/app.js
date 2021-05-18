const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

///Root Route
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/fallinlovewith/:thing", (req, res) => {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", (req, res) => {
    var posts = [
        {title: "Blah Blah Blah", author: "Micheal"},
        {title: "I Know, Right!?!?", author: "Shea"},
        {title: "The world is Ending!", author: "Julie"}
    ]

    res.render("posts", {posts: posts})
});



///localhost:3000
app.listen(3000, () => { 
    console.log('Server listening on port 3000'); 
  });