const fs = require('fs');

var story = () => {
  try {
    var storyString = fs.readFileSync('app/model/storyData.json');
    //return JSON.parse(storyString);
  } catch (e){
    return [];
  }
};
