const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: DataTypes.STRING(45),
  email: DataTypes.STRING(100),
  senha: DataTypes.STRING(45),
}, {
  tableName: 'tb_usuario',
  timestamps: false,
});

module.exports = Usuario;
