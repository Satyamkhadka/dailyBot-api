const db = require('../Model/db');

module.exports = db.sequelize.define(
  'sections',{
     userFullName: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true ,
    },
    userFullPermanentAddress: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    userFullTemporaryAddress:{
        type:db.Sequelize.STRING,
        allowNull:false
    },
    userDOB:{
        type:db.Sequelize.STRING,
        allowNull:false
    },
    userNickName:{
        type:db.Sequelize.STRING,
        allowNull:false
    },
    userNickName:{
        type:db.Sequelize.STRING,
        allowNull:false
    },
    userId:{
        type:db.Sequelize.STRING,
        allowNull:false
    }
  },
  {
    timestamps:false,
  }

);