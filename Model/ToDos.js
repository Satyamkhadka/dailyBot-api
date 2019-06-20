const db = require('../Model/db');

module.exports = db.sequelize.define(
  'to_dos',{
    toDoId: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true ,
    },
    toDoTitle: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    createdDate:{
        type:db.Sequelize.DATE,
        allowNull:false
    },
    toDoLastEdited:{
        type:db.Sequelize.DATE,
        allowNull:false
    },
    toDoTag:{
        type: db.Sequelize.STRING,
      allowNull: false,
    },
    toDoDescription:{
        type: db.Sequelize.STRING,
      allowNull: false,
    },
    author:{
        type:db.Sequelize.INTEGER,
        allowNull:false
    },
    toDoSections: {
        type: db.Sequelize.INTEGER,
    },
    bgColor:{
        type:db.Sequelize.INTEGER,
        allowNull:false
    },
    sharedWith:{
        type:db.Sequelize.INTEGER,
        allowNull:false
    },
    
  },
  {
    timestamps:false,
  }

);