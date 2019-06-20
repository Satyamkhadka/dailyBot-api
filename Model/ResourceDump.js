const db = require('../Model/db');

module.exports = db.sequelize.define(
  'action_mappings',{
    resourceId: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true ,
    },
    resourceTitle: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    resourceCreatedDate:{
        type:db.Sequelize.DATE,
        allowNull:false
    },
    resourceTag:{
        type: db.Sequelize.STRING,
      allowNull: false,
    },
    resourceDescription:{
        type: db.Sequelize.STRING,
      allowNull: false,
    },
    resourceOne:{
        type: db.Sequelize.STRING,
      allowNull: false,
    },
    resourceTwo:{
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