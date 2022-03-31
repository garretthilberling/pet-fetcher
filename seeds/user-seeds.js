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

    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
