const singleStoryDataBlock = require('../app/model/singleStoryDataBlock.json');
const dateFormat = require('dateformat');

exports.singleStoryBlock = (req, res) => {
  const pubDate = new Date(singleStoryDataBlock.resources[2].value);
  const fullPubDate = dateFormat(pubDate, 'fullDate');
  const pubDateTime = dateFormat(pubDate,'h:MM TT Z');

  res.render('../app/views/singleStoryBlock', {
    singleStoryDataBlock: singleStoryDataBlock,
    title: singleStoryDataBlock.resources[1].value,
    pubDate: pubDate,
    fullPubDate: fullPubDate,
    pubDateTime: pubDateTime,
    author: singleStoryDataBlock.resources[3].authors[0].title,
    slug: singleStoryDataBlock.resources[0].title,
    blockQuote: singleStoryDataBlock.resources.blockTag,

  });
};
