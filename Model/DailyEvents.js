const db = require('../Model/db');

module.exports = db.sequelize.define(
  'action_mappings',{
    dailyEventId: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true ,
    },
    eventTitle: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    eventCreatedDate:{
        type:db.Sequelize.DATE,
        allowNull:false
    },
    eventLastEditedDate:{
        type:db.Sequelize.DATE,
        allowNull:false
    },
    eventTag:{
        type: db.Sequelize.STRING,
      allowNull: false,
    },
    eventDescription:{
        type: db.Sequelize.STRING,
      allowNull: false,
    },
    author:{
        type:db.Sequelize.INTEGER,
        allowNull:false
    }
  },
  {
    timestamps:false,
  }

);