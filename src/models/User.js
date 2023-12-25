const sequelize = require('../config/db/db-connect');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'first name cannot be null',
      },
      notEmpty: {
        msg: 'first name cannot be empty',
      },
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'last name cannot be null',
      },
      notEmpty: {
        msg: 'last name cannot be empty',
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'email cannot be null',
      },
      notEmpty: {
        msg: 'email cannot be empty',
      },
      isEmail: {
        msg: 'email is not valid',
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'password cannot be null',
      },
      notEmpty: {
        msg: 'password cannot be empty',
      },
      is: {
        args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        msg: 'password must match the pattern',
      },
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'address cannot be null',
      },
      notEmpty: {
        msg: 'address cannot be empty',
      },
    },
  },
  SSN: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
    validate: {
      notNull: {
        msg: 'ssn cannot be null',
      },
      notEmpty: {
        msg: 'ssn cannot be empty',
      },
      is: {
        args: /^\d{14}$/,
        msg: 'ssn is not valid',
      },
    },
    },
  PhoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'phone number cannot be null',
      },
      notEmpty: {
        msg: 'phone number cannot be empty',
      },
      is: {
        args: /^\d{11}$/,
        msg: 'phone number is not valid',
      },
    },
  },
});


module.exports = User;

Validate

Wakandan validate 

  Bakr lead us through the forest, through the pain