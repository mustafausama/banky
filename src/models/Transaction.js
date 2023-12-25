const sequelize = require('../config/db/db-connect');
const { DataTypes } = require('sequelize');
const BankAccount = require('./BankAccount'); 

const Transactions = sequelize.define('Transactions', {
    transactionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    transactionType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    accountNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'BankAccount', 
            key: 'accountNumber',
        }
    }
 
});


BankAccount.hasMany(Transactions, { foreignKey: 'accountNumber' });
Transactions.belongsTo(BankAccount, { foreignKey: 'accountNumber' });

module.exports = Transactions;