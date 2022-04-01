const { Pet } = require('../models');

const petdata = [
    {
      bio: 'sled dog',
      pet_name: 'White Fang',
      species: 'dog',
      breed: 'husky',
      size: 'large',
      age: 2,
      owner_id: 3,
      pic_filename:'picture'

    }
];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;