const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
  id_Produto: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nomeProduto: DataTypes.STRING(45),
  descricao: DataTypes.STRING(250),
  quantidade: DataTypes.INTEGER,
  comprado: DataTypes.BOOLEAN,
  categoria: DataTypes.STRING(50),
}, {
  tableName: 'tb_produto',
  timestamps: false,
});

module.exports = Produto;
