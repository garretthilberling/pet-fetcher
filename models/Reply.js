const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reply extends Model {}

Reply.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        reply_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'comment',
                key: 'id'
            }
        }
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'reply'
    }
);

module.exports = Reply;