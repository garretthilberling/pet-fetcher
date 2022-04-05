const { Fave } = require('../models');

const favedata = [
  {
    user_id: 1,
    pet_id: 1
  },
  {
    user_id: 2,
    pet_id: 2
  },
  {
    user_id: 3,
    pet_id: 1
  },
  {
    user_id: 4,
    pet_id: 1
  },
  {
    user_id: 5,
    pet_id: 3
  },
  
];

const seedFaves = () => Fave.bulkCreate(favedata);

module.exports = seedFaves;
