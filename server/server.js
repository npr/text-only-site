const express = require('express');
const path = require('path');
const fs = require('fs');
const storyData = require('../app/model/storyData.json');
const dateFormat = require('dateformat');
//const story = require('../story.js');
//const routes = require('./routes/index.js')

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const storyData = require('../app/model/storyData.json');
   console.dir(storyData);
   const pubDate = (storyData.resources[2].value);
   const fullPubDate= dateFormat(pubDate, 'fullDate');
   const updatedDate = (storyData._meta.lastModified);
   const fullUpdatedDate = dateFormat(updatedDate, 'fullDate');

  res.render('../app/views/index', {
    storyData: storyData,
    title: storyData.resources[1].value,
    fullPubDate: fullPubDate,
    fullUpdatedDate: fullUpdatedDate,
    author: storyData.resources[3].title,
    publication: storyData.resources[0].title,
  });
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

module.exports = app;
