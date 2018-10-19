const {storyModel} = require('../app/model/storyModel');
const singleStoryDataBlock = require('../app/model/singleStoryDataBlock.json');

exports.singleStoryBlock = (req, res) => {
  const story= new storyModel(singleStoryDataBlock);

  res.render('../app/views/singleStoryBlock', {
    singleStoryDataBlock: singleStoryDataBlock,
    title: story.getTitle(),
    fullPubDate: story.getFullPubDate(),
    pubDateTime: story.getPubDateTime(),
    author: story.getAuthor(),
    slug: story.getSlug(),
    blockQuote: story.getBlockQuote(),

  });
};
