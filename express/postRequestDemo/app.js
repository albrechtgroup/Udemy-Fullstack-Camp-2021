console.log("Testing PostRequestDemo Son!");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Mariya", "Julie", "Saskia", "Jackie", "Gina"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});



//localhost:8080
app.listen(8080, function() { 
    console.log('Server listening on port 8080'); 
  });