module.exports = (sequelize, DataTypes) => {

  let Vuelo = sequelize.define("Vuelo", {
    vuelo_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    assigned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Vuelo.associate = (models) => {

    Vuelo.belongsTo(models.Avion, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Vuelo;
  
};
