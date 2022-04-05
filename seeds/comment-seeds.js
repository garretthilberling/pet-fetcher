const { Comment } = require('../models');

const commentdata = [
  {
<<<<<<< HEAD
    comment_text: 'This is a good dog',
    user_id: 1,
    pet_id: 1
  }
=======
    comment_text: 'This one is my favorite!!!',
    user_id: 1,
    pet_id: 1
  },
  {
    comment_text: 'Looking for a good home',
    user_id: 4,
    pet_id: 1
  },
  {
    comment_text: 'Looks so playful',
    user_id: 2,
    pet_id: 2
  },
  {
    comment_text: 'Cant wait to meet this one in person!',
    user_id: 2,
    pet_id: 2
  },

>>>>>>> main
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;