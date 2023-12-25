const sequelize = require('../config/db/db-connect');
const { DataTypes } = require('sequelize');
const User = require('./User'); 
const Bank = require('./Bank'); 

const BankAccount = sequelize.define('BankAccount', {
    accountNumber: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    openingDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    SSN: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'SSN',
        }
    },
    swiftcode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Bank',
            key: 'swiftcode',
        }
    }
});

User.hasMany(BankAccount, { foreignKey: 'SSN' });
BankAccount.belongsTo(User, { foreignKey: 'SSN' });


Bank.hasMany(BankAccount, { foreignKey: 'swiftcode' });
BankAccount.belongsTo(Bank, { foreignKey: 'swiftcode' });

module.exports = BankAccount;
