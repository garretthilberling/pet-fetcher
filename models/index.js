const User = require('./User');
const Pet = require('./Pet');
const Fave = require('./Fave');
const Comment = require('./Comment')



User.hasMany(Pet, {
    foreignKey: 'owner_id'
});

Pet.belongsTo(User, {
    foreignKey: 'owner_id'
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

Fave.belongsTo(User, {
    foreignKey: 'user_id'
});

Fave.belongsTo(Pet, {
    foreignKey: 'pet_id'
});

User.hasMany(Fave, {
    foreignKey: 'user_id'
});

Pet.hasMany(Fave, {
    foreignKey: 'pet_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Pet, {
    foreignKey: 'pet_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Pet.hasMany(Comment, {
    foreignKey: 'pet_id'
});

module.exports = { User, Pet, Fave };