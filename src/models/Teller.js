const sequelize = require('../config/db/db-connect');
const { DataTypes } = require('sequelize');
const Bank = require('./Bank'); 

const Teller = sequelize.define('Teller', {
    employeeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: { msg: 'Please enter a valid email' }
        }
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },

    swiftcode: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Bank',
            key: 'swiftcode',
        }
    }

});


Bank.hasMany(Teller, { foreignKey: 'swiftcode' });
Teller.belongsTo(Bank, { foreignKey: 'swiftcode' });

module.exports = Teller;