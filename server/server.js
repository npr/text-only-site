//load expess
const express = require('express');
const path = require('path');
const fs = require('fs');
const story = require('../story.js');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
//make new express app- call express as a function
var app = express();

//configure express static middleware
app.use(express.static(publicPath));

//set up HTTP route handlers
//first register handler; allow us to set
//up handler for all http get request (json data, html page)
app.get('/', (req, res) => {
  res.send()
});


app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
