const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Poem extends Model {}

Poem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "poem",
    freezeTableName: true,
  }
);

module.exports = Poem;
