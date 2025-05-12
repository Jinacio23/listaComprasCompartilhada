const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ListaProduto = sequelize.define('ListaProduto', {
  tb_listaCompras_id_listaCompras: DataTypes.INTEGER,
  tb_Produto_id_Produto: DataTypes.INTEGER,
}, {
  tableName: 'tb_listaCompras_has_tb_produto',
  timestamps: false,
});

module.exports = ListaProduto;
