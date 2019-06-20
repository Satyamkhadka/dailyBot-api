const db = require('../Model/db');

module.exports = db.sequelize.define(
  'tag_collections',{
    tagId: {
      type: db.Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true ,
    },
    uniqueTagIdentifier: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    tagTitle:{
        type:db.Sequelize.DATE,
        allowNull:false
    },
  },
  {
    timestamps:false,
  }

);