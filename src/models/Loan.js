const sequelize = require('../config/db/db-connect');
const { DataTypes } = require('sequelize');
const BankAccount = require('./BankAccount'); 

const Loan = sequelize.define('Loan', {
    loanId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    interestRate: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    accountNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User', 
            key: 'accountNumber',
        }
    }

});


BankAccount.hasMany(Loan, { foreignKey: 'accountNumber' });
Loan.belongsTo(BankAccount, { foreignKey: 'accountNumber' });

module.exports = Loan;
