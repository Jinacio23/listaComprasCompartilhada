const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RoleUsuario = sequelize.define('RoleUsuario', {
  tb_role_id_role: DataTypes.INTEGER,
  tb_usuario_id_usuario: DataTypes.INTEGER,
  tb_listaCompras_id_listaCompras: DataTypes.INTEGER,
  nome: DataTypes.STRING(45),
}, {
  tableName: 'tb_role_has_tb_usuario',
  timestamps: false,
});

module.exports = RoleUsuario;
