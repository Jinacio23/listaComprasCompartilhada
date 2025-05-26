module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING(45),
    email: DataTypes.STRING(100),
    senha: DataTypes.STRING(100),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'tb_usuario',
    timestamps: false
  });

  Usuario.associate = (models) => {
    Usuario.belongsToMany(models.ListaCompras, {
      through: models.UsuarioRole,
      foreignKey: 'usuario_id',
      otherKey: 'lista_id'
    });
    Usuario.hasMany(models.UsuarioRole, {
      foreignKey: 'usuario_id'
    });
  };

  return Usuario;
};
