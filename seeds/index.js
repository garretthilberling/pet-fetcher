const seedUsers = require('./user-seeds');
const seedPets = require('./pet-seeds');
const seedFaves = require('./fave-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');
  
    await seedPets();
    console.log('--------------');
  
    await seedFaves();
    console.log('--------------');
  
  
    process.exit(0);
  };
  
  seedAll();