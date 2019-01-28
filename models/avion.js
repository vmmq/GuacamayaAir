module.exports = (sequelize, DataTypes) => {
  
  let Avion = sequelize.define("Avion", {
    Avion_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Avion.associate = (models) => {
  
    Avion.hasMany(models.Vuelo);
  };

  return Avion;

};
