const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/database');

// Cria a instância do Sequelize
const sequelize = new Sequelize(dbConfig);

// Importa modelos
const Usuario = require('./usuario')(sequelize, DataTypes);
const Role = require('./role')(sequelize, DataTypes);
const ListaCompras = require('./listaCompras')(sequelize, DataTypes);
const Produto = require('./produto')(sequelize, DataTypes);
const UsuarioRole = require('./roleUsuario')(sequelize, DataTypes);
const ListaProduto = require('./listaProduto')(sequelize, DataTypes);

// Relacionamento N:N: ListaCompras <-> Produto
ListaCompras.belongsToMany(Produto, {
  through: 'tb_listaCompras_has_tb_produto',
  foreignKey: 'tb_listaCompras_id'
});
Produto.belongsToMany(ListaCompras, {
  through: 'tb_listaCompras_has_tb_produto',
  foreignKey: 'tb_Produto_id_Produto'
});

// Relacionamento N:N:N: Usuario <-> Role <-> ListaCompras via UsuarioRole
Usuario.belongsToMany(Role, {
  through: UsuarioRole,
  foreignKey: 'usuario_id'
});
Role.belongsToMany(Usuario, {
  through: UsuarioRole,
  foreignKey: 'role_id'
});

Usuario.belongsToMany(ListaCompras, {
  through: UsuarioRole,
  foreignKey: 'usuario_id'
});
ListaCompras.belongsToMany(Usuario, {
  through: UsuarioRole,
  foreignKey: 'tb_listaCompras_id'
});

Role.belongsToMany(ListaCompras, {
  through: UsuarioRole,
  foreignKey: 'role_id'
});
ListaCompras.belongsToMany(Role, {
  through: UsuarioRole,
  foreignKey: 'tb_listaCompras_id'
});

module.exports = {
  Sequelize,
  sequelize,
  Usuario,
  Role,
  ListaCompras,
  Produto,
  UsuarioRole,
  ListaProduto
};
