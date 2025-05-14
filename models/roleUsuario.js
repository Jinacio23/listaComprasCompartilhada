module.exports = (sequelize, DataTypes) => {
  const UsuarioRole = sequelize.define('UsuarioRole', {
    tb_usuario_id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    tb_role_id_role: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    tb_listacompras_id_listaCompras: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {
    tableName: 'tb_usuario_has_tb_role',
    timestamps: false,
    indexes: [
      {
        name: 'idx_usuario_role_lista',
        unique: true,
        fields: ['tb_usuario_id_usuario', 'tb_role_id_role', 'tb_listacompras_id_listaCompras']
      }
    ],
    primaryKey: true
  });

  return UsuarioRole;
};
