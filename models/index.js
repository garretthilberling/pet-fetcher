const User = require('./User');
const Pet = require('./Pet');
const Fave = require('./Fave');

User.hasMany(Pet, {
    foreignKey: 'owner_id'
});

Pet.belongsTo(User, {
    foreignKey: 'pet_id'
});

User.belongsToMany(Pet, {
    through: Fave,
    as: 'favorites',
    foreignKey: 'user_id'
});

Pet.belongsToMany(User, {
    through: Fave,
    as: 'favorites',
    foreignKey: 'pet_id'
});

module.exports = { User, Pet, Fave };