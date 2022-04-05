const { Pet } = require('../models');

const petdata = [
    {
      bio: 'sled dog',
      pet_name: 'White Fang',
      species: 'dog',
      breed: 'husky',
      size: 'large',
      age: 'adult',
      pic_filename: "https://www.petpaw.com.au/wp-content/uploads/2014/04/Boxer-Dog-3.jpg",
      user_id: 1

    }
];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;