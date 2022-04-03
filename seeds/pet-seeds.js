const { Pet } = require('../models');

const petdata = [
    {
      bio: 'sled dog',
      pet_name: 'White Fang',
      species: 'dog',
      breed: 'husky',
      size: 'large',
      age: 'adult',
      user_id: 1

    }
];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;