const sequelize = require('../config/db/db-connect');
const { DataTypes } = require('sequelize');
const BankAccount = require('./BankAccount'); 

const Card = sequelize.define('Card', {
    cardId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cvv: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expiryDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    accountNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'BankAccount', 
            key: 'accountNumber',
        }
    }
});

BankAccount.hasMany(Card, { foreignKey: 'accountNumber' });
Card.belongsTo(BankAccount, { foreignKey: 'accountNumber' });

module.exports = Card;