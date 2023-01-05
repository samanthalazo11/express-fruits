// require dependencies
const express = require('express');

// inititalize the express app
const app = express();

// configure settings
require('dotenv').config(); // require and call .config before accessing .env variables

console.log(process.env)

const port = process.env.PORT;

// configure database
const fruits = ['apple', 'banana', 'pear'];

// mount middleware

// mount routes

// INDUCES - a way to remember the proper ordering of our routes
// <a href = "/fruits">See Fruits </a>

// index - GET/fruits
app.get('/fruits', function(req,res){
    res.send(fruits);
});


// show - GET /fruits/:someUniqueIdentifier

app.get('/fruits/:indexOfFruitsArray', function (req,res){
    const fruit = fruits[req.params.indexOfFruitsArray];
    res.send(fruit);
});

// tell the app to listen on a dedicated port for request
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});