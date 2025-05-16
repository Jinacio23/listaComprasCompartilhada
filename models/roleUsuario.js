module.exports = (sequelize, DataTypes) => {
  const UsuarioRole = sequelize.define('UsuarioRole', {
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      field: 'usuario_id'
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      field: 'role_id'
    },
    listaComprasId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      field: 'tb_listaCompras_id'
    }
  }, {
    tableName: 'tb_usuario_has_tb_role',
    timestamps: false,
    indexes: [
      {
        name: 'uniq_usr_role_lista',
        unique: true,
        fields: ['usuario_id', 'role_id', 'tb_listaCompras_id']
      }
    ]
  });

  return UsuarioRole;
};
