const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/cat_app");
mongoose.connect('mongodb://localhost:27017/cat_app', {useNewUrlParser: true, useUnifiedTopology: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

const Cat = mongoose.model("Cat", catSchema);


// adding a new cat to the DB
var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Playful"
});

george.save((err, cat) => {
    if(err) {
        console.log("Something Went Wrong!!!")
    } else {
        console.log("We Just Saved a New Cat to the DB:")
        console.log(cat);
    }
});


/// *Mongoose 2020 Docs*

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


///////////////////////////////////////////

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/db_name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to DB!'))
// .catch(error => console.log(error.message));


// app.listen(3000, () => {
//     console.log("================================")
//     console.log("App is LIVE on Port 3000*")
// })