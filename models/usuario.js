module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {type:DataTypes.STRING(45),allowNull: false},
    email: {type:DataTypes.STRING(100),allowNull: false},
    senha: {type:DataTypes.STRING(45),allowNull: false}
  }, {
    tableName: 'tb_usuario',
    timestamps: false
  });

  return Usuario;
};
