module.exports = (sequelize, DataTypes) => {
  const UsuarioRole = sequelize.define('UsuarioRole', {
    usuario_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    lista_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  },  {
    tableName: 'tb_usuario_has_tb_role',
    timestamps: false,
    uniqueKeys: {
      usuario_role_pk: {
        fields: ['usuario_id', 'lista_id', 'role_id']
      }
    }
  });

  UsuarioRole.associate = (models) => {
    UsuarioRole.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
    UsuarioRole.belongsTo(models.ListaCompras, { foreignKey: 'lista_id' });
    UsuarioRole.belongsTo(models.Role, { foreignKey: 'role_id' });
  };

  return UsuarioRole;
};
