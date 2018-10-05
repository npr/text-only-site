//set up HTTP route handlers
//first register handler; allow us to set
//up handler for all http get request (json data, html page)
const singleStoryData = require('../app/model/singleStoryData.json');
const dateFormat = require('dateformat');

exports.singleStory = (req, res) => {
  const singleStoryData = require('../app/model/singleStoryData.json');
  const pubDate = new Date(singleStoryData.resources[2].value);
  const fullPubDate= dateFormat(pubDate, 'fullDate');
  const updatedDate = new Date (singleStoryData._meta.lastModified);
  const fullUpdatedDate = dateFormat(updatedDate, 'fullDate');
  const shortTimeUpdatedDate = dateFormat(updatedDate, 'h:MM TT Z');


  res.render('../app/views/index', {
    singleStoryData: singleStoryData,
    title: singleStoryData.resources[1].value,
    pubDate: pubDate,
    updatedDate: updatedDate,
    fullPubDate: fullPubDate,
    fullUpdatedDate: fullUpdatedDate,
    shortTimeUpdatedDate: shortTimeUpdatedDate,
    author: singleStoryData.resources[3].title,
    publication: singleStoryData.resources[0].title,

  });
};
