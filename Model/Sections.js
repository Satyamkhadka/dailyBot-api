const db = require('../Model/db');

module.exports = db.sequelize.define(
  'sections',{
     sectionId: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true ,
    },
    sectionTitle: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    sectionColor:{
        type:db.Sequelize.DATE,
        allowNull:false
    },
  },
  {
    timestamps:false,
  }

);