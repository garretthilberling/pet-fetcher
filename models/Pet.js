const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Pet model
class Pet extends Model {
  static fave(body, models) {
      return models.Fave.create({
          user_id: body.user_id,
          pet_id: body.pet_id
      }).then(() => {
          return Pet.findOne({
              where: {
                  id: body.pet_id
              },
              attributes: [
                  'id',
                  'pet_name', 'bio', 'species', 'breed', 'size', 'age',
                  'created_at',
                  [sequelize.literal('(SELECT COUNT(*) FROM fave WHERE pet.id = fave.pet_id)'), 'fave_count']
              ]
          });
      });
  }
}

// create fields/columns for Pet model
Pet.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      pet_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bio: { //brief bio introducing the pet
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
            len: [0, 500]
          }
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false
      },
      breed: {
        type: DataTypes.STRING,
        allowNull: false
      },
      size: { //the user will choose between 3 options from a dropdown menu: small, medium, large. 
        type: DataTypes.STRING, //Will use js logic to return the value of whichever is selected
        allowNull: false
      },
      age: { 
        type: DataTypes.INTEGER,
        allowNull: false   
      },
      owner_id: {
          type: DataTypes.INTEGER,
          allowNull: true
      },
      pic_filename: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { 
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'pet'
    }
  );
  
  module.exports = Pet;
  