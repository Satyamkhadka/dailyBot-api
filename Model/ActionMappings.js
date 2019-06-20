const db = require('../Model/db');

module.exports = db.sequelize.define(
  'action_mappings',{
    mapId: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true ,
    },
    mapActionKeyword: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    mapActionId:{
        type:db.Sequelize.INTEGER,
        allowNull:false
    },
    mapIntegrity:{
        type:db.Sequelize.INTEGER,
        allowNull:false
    },
    replyId:{
        type:db.Sequelize.INTEGER,
        allowNull:false
    }
  },
  {
    timestamps:false,
  }

);