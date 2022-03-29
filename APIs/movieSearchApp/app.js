var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", (req, res) => {
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, (error, response, body) => {
       if(!error && response.statusCode == 200){
           var data = JSON.parse(body);
           res.render("results", {data: data});
       } 
    });
});



//localhost:3000
app.listen(3000, function() { 
    console.log('=== Server listening on port 3000');
    console.log('=== Movie App has Started!'); 
  });