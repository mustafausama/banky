const sequelize = require('../config/db/db-connect');
const { DataTypes } = require('sequelize');


const Bank = sequelize.define('Bank', {
    branchName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    swiftcode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    accountType: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Bank;