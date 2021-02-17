const express = require('express')
const app = express()
const mongoose = require('mongoose');
var cors = require('cors')
var bodyParser = require('body-parser')

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse requests of content-type - application/json
app.use(bodyParser.json())




mongoose.connect('mongodb://localhost:27017/SnackDelice', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// import router 

const categoryRoute = require('./routes/categories');
const productRoute = require('./routes/products');
const sousCategoryRoute = require('./routes/sousCategory');
const codepromoRoute = require('./routes/codepromo');
const tableRoute = require('./routes/table');

app.use('/categories', categoryRoute);
app.use('/products', productRoute);
app.use('/sousCategory', sousCategoryRoute);
app.use('/Codepromo' ,codepromoRoute);
app.use('/table' ,tableRoute);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})