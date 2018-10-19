const dateFormat = require('dateformat');
class storyModel {

    constructor(json) {
      this.json = json;
    }
    getTitle () {
       return this.json.resources[1].value;
    }
    getAuthor () {
      return this.json.resources[3].authors[0].title;
    }
    getSlug () {
      return this.json.resources[0].title;
    }
    getBlockQuote () {
      return this.json.resources.blockTag;
    }
    getFullPubDate () {
        return dateFormat(this.json.resources[2].value, 'fullDate');
    }
    getPubDateTime () {
      return dateFormat(this.json.resources[2].value, 'h:MM TT Z');
    }
}

/**
 *
 * @param {number} storyId
 * @returns {storyModel}
 */

function getStoryModel(storyId) {
    const singleStoryDataBlock = require('./singleStoryDataBlock.json');
    const storyModel = new StoryModel(singleStoryDataBlock);

    return storyModel;
}
exports.getStoryModel = getStoryModel;
exports.storyModel = storyModel;
