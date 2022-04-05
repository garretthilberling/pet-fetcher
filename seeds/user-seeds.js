const sequelize = require('../config/connection');
const { User, Pet } = require('../models');

const userdata = [
    {
     username: 'Pet Fetcher',
     email: 'petfetcher@yahoo.com',
     phone: 1234567891,
     state: 'New York',
     city: 'New York',
     password: 'pass'

<<<<<<< HEAD
    }
=======
    },
    {
        username: 'Naseem Gabriel',
        email: 'Naseem@yahoo.com',
        phone: 1234567891,
        state: 'Illinois',
        city: 'Chicago',
        password: 'pass'
   
       },
       {
        username: 'Ema Abascal',
        email: 'Ema@yahoo.com',
        phone: 1234567891,
        state: 'Illinois',
        city: 'Chicago',
        password: 'pass'
   
       },
       {
        username: 'Albert Lawson',
        email: 'Albert@yahoo.com',
        phone: 1234567891,
        state: 'Florida',
        city: 'Tampa',
        password: 'pass'
   
       },
       {
        username: 'Jeremy Lewis',
        email: 'Jeremy@yahoo.com',
        phone: 1234567891,
        state: 'North Carolina',
        city: 'Charlotte',
        password: 'pass'
   
       },
       {
        username: 'Sarah Davis',
        email: 'Sarah@yahoo.com',
        phone: 1234567891,
        state: 'Florida',
        city: 'Tampa',
        password: 'pass'
   
       }
>>>>>>> main
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
