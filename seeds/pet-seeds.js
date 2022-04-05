const { Pet } = require('../models');

const petdata = [
    {
<<<<<<< HEAD
      bio: 'sled dog',
      pet_name: 'White Fang',
      species: 'dog',
      breed: 'husky',
      size: 'large',
<<<<<<< HEAD
      age: 2,
      owner_id: 3,
      pic_filename:'picture'
=======
      age: 'adult',
      pic_filename: "https://www.petpaw.com.au/wp-content/uploads/2014/04/Boxer-Dog-3.jpg",
      user_id: 1
>>>>>>> 8297c9a79f784ab91eb12c4a5879d19ec366bde3

    }
=======
      bio: 'Male fawn boxer, black mask, white markings',
      pet_name: 'ButterFinger',
      species: 'dog',
      breed: 'boxer',
      size: 'small',
      age: 1,
      owner_id: 1

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
    

>>>>>>> main
];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;