const fs = require('fs');

var fetchStory = () => {
  try {
    var storyString = fs.readFileSync('../app/model/storyData.json');
    return JSON.parse(storyString);
  } catch (e){
    return [];
  }
};
