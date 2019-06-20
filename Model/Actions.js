const db = require('../Model/db');

module.exports = db.sequelize.define(
  'actions',{
    actionId: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true ,
    },
    actionName: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    actionDescription:{
        type:db.Sequelize.STRING,
        allowNull:false
    },
  },
  {
    timestamps:false,
  }

);