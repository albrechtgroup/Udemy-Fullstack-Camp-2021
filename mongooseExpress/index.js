/// Farm Stand Project. Using Mongoose for 
/// our MongoDb server.
const express = require('express'); 
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Product = require('./models/product');

/// O.D.M. = Object Document Mapper(Mongoose)
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("======================================")
        console.log("MONGO Connction OPEN!!")
    })
    .catch(err => {
        console.log("======================================")
        console.log("OH NOOO, MONGO CONNECTION ERROR***")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})

app.get('/products/new', (req, res) => {
    res.render('products/new')
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    console.log(product);
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/edit', { product })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id)
    res.redirect('/products');
})


app.listen(3000, () => {
    console.log("================================")
    console.log("App is LIVE on Port 3000*")
})


/// Example of new mongoose Schema:

// var catSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     temperament: String
// });

// const Cat = mongoose.model("Cat", catSchema);


// // adding a new cat to the DB
// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Playful"
// });

// george.save((err, cat) => {
//     if(err) {
//         console.log("Something Went Wrong!!!")
//     } else {
//         console.log("We Just Saved a New Cat to the DB:")
//         console.log(cat);
//     }
// });