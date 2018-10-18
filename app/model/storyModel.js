//currently working on moving data into this model rather than index.js

class storyModel {

    constructor() {
    }

    setData(json) {
      this.json = json;
      console.log(this.json);
    }

    getTitle () {
       return this.json.resources[1].value;
    }
    // getAuthor () {
    //   return this.json.resources[3].authors[0].title;
    // }
    // getSlug () {
    //   return this.json.resources[0].title;
    // }
    // getBlockQuote () {
    //   return this.json.resources.blockTag;
    // }
    // getPubDate () {
    //     return new Date(singleStoryDataBlock.resources[2].value);
    // }
    // getFullPubDate () {
    //     return dateFormat(getPubDate(), 'fullDate');
    // }
    // getPubDateTime () {
    //   return dateFormat(getPubDate(), 'h:MM TT Z');
    // }

}

// /**
//  *
//  * @param {number} storyId
//  * @returns {storyModel}
//  */
// function getStoryModel(storyId) {
//     const singleStoryDataBlock = require('./singleStoryDataBlock.json');
//     const storyModel = new StoryModel(singleStoryDataBlock);
//
//     return storyModel;
// }
//
// exports.getStoryModel = getStoryModel;
exports.storyModel = storyModel;
