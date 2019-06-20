const db = require('../Model/db');

module.exports = db.sequelize.define(
  'bot',{
    botResponseId: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true ,
    },
    botResponseMessage: {
      type: db.Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    timestamps:false,
  }

);