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

    },

  
    {
      bio: 'Male sealed brindle/ black boxer, white markings',
      pet_name: 'Milkyway',
      species: 'dog',
      breed: 'boxer',
      size: 'small',
      age: 1,
      owner_id: 1

    },
    {
      bio: 'Female sealed brindle/ black boxer, white markings',
      pet_name: 'Hershey',
      species: 'dog',
      breed: 'boxer',
      size: 'small',
      age: 1,
      owner_id: 1

    },
    {
      bio: 'Female sealed brindle/ black boxer, white markings',
      pet_name: 'Joy',
      species: 'dog',
      breed: 'boxer',
      size: 'small',
      age: 1,
      owner_id: 1

    },
    {
      bio: 'Female sealed brindle/ black boxer, white markings',
      pet_name: 'Ruth',
      species: 'dog',
      breed: 'boxer',
      size: 'small',
      age: 1,
      owner_id: 1

    },
    {
      bio: 'Female sealed brindle/ black boxer, white markings',
      pet_name: 'Snickers',
      species: 'dog',
      breed: 'boxer',
      size: 'small',
      age: 1,
      owner_id: 1

    },

];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;