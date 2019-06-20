const db = require('../Model/db');

module.exports = db.sequelize.define(
  'users',{
     userId: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true ,
    },
    userDisplayId: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    userEmail: {
        type: db.Sequelize.STRING,
        allowNull: false,
      },
      userSecondEmail: {
        type: db.Sequelize.STRING,
        allowNull: false,
      },
    userPhoneNumber:{
        type:db.Sequelize.STRING,
        allowNull:false
    },  
    userPassword: {
        type: db.Sequelize.STRING,
        allowNull: false,
      },
      userClearance: {
        type: db.Sequelize.STRING,
        allowNull: false,
      },
      userPasswordReset: {
        type: db.Sequelize.STRING,
        allowNull: false,
      },
    
  },
  {
    timestamps:false,
  }
);