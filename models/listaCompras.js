const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ListaCompras = sequelize.define('ListaCompras', {
  id_listaCompras: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: DataTypes.STRING(45),
  dataCriacao: DataTypes.DATE,
}, {
  tableName: 'tb_listaCompras',
  timestamps: false,
});

module.exports = ListaCompras;
