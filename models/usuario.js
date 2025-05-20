module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true
    },
    nome: {type:DataTypes.STRING(45),allowNull: true},
    email: {type:DataTypes.STRING(100),allowNull: true},
    senha: {type:DataTypes.STRING(100),allowNull: true}
  }, {
    tableName: 'tb_usuario',
    timestamps: false
  });

  return Usuario;
};
