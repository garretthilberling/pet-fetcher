const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is a good dog',
    user_id: 1,
    pet_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;