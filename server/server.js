const express = require('express');
const path = require('path');
const fs = require('fs');
const ejsLint = require('ejs-lint');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath));
app.set('view engine', 'ejs');
var routes = require('../routes');

// singleStory
app.get('/', routes.singleStory);

//singleStoryBlock
app.get('/block', routes.singleStoryBlock);

const singleStoryDataBlock = require('../app/model/singleStoryDataBlock.json');
singleStoryDataBlock.hasOwnProperty()

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

module.exports = app;
