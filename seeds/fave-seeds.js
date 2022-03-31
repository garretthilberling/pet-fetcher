const { Fave } = require('../models');

const favedata = [
  {
    user_id: 1,
    pet_id: 1
  }
];

const seedFaves = () => Fave.bulkCreate(favedata);

module.exports = seedFaves;
