module.exports = (sequelize, DataTypes) => {
  const ListaCompras = sequelize.define('ListaCompras', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING(45),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'tb_listaCompras',
    timestamps: false
  });

  ListaCompras.associate = (models) => {
    ListaCompras.belongsToMany(models.Usuario, {
      through: models.UsuarioRole,
      foreignKey: 'lista_id',
      otherKey: 'usuario_id'
    });
    ListaCompras.hasMany(models.UsuarioRole, {
      foreignKey: 'lista_id'
    });
  };

  return ListaCompras;
};
