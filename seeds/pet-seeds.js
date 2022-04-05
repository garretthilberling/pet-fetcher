const { Pet } = require('../models');

const petdata = [
    {
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
    

];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;