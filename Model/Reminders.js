const db = require('../Model/db');

module.exports = db.sequelize.define(
  'action_mappings',{
    reminderId: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true ,
    },
    reminderTitle: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    reminderTime:{
        type: db.Sequelize.TIME,
      allowNull: false,
    },
    reminderCreatedDate:{
        type:db.Sequelize.DATE,
        allowNull:false
    },
    reminderLastEditedDate:{
        type:db.Sequelize.DATE,
        allowNull:false
    },
    reminderTag:{
        type: db.Sequelize.STRING,
      allowNull: false,
    },
    reminderDescription:{
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