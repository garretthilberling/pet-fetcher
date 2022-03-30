const { Model, DataTypes } = require('sequelize');
const { DataTypes } = require('sequelize/types');
const sequelize = require('../config/connection');

// create our Pet model
class Pet extends Model {}

// create fields/columns for Pet model
Pet.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      bio: { //brief bio introducing the pet
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
            len: [0, 500]
          }
      },
      pet_name: {
        type: DataTypes.STRING,
        allowNull: false
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
        allowNull: false,
      },
    },
    { 
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'pet'
    }
  );
  
  module.exports = Pet;
  