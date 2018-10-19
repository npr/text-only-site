const express = require('express');
const path = require('path');
const fs = require('fs');
const ejsLint = require('ejs-lint');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();

const routes = require('../routes');

app.use(express.static(publicPath));
app.set('view engine', 'ejs');

//singleStoryBlock
app.get('/', routes.singleStoryBlock);

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

module.exports = app;
