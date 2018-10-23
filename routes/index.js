const {storyModel} = require('../app/model/storyModel');
const singleStoryDataBlock = require('../app/model/singleStoryDataBlock.json');

exports.singleStoryBlock = (req, res) => {
  const story= new storyModel(singleStoryDataBlock);

  res.render('../app/views/singleStoryBlock', {
    story:story,
  });
};
