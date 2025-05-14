const { Sequelize, DataTypes } = require('sequelize');

// Cria a instância do Sequelize
const sequelize = new Sequelize({
  username: 'root',
  password: '',
  database: 'listacompras',
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false, // opcional, remove logs no console
});

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
  foreignKey: 'tb_listaCompras_id_listaCompras'
});
Produto.belongsToMany(ListaCompras, {
  through: 'tb_listaCompras_has_tb_produto',
  foreignKey: 'tb_Produto_id_Produto'
});

// Relacionamento N:N:N: Usuario <-> Role <-> ListaCompras via UsuarioRole
Usuario.belongsToMany(Role, {
  through: UsuarioRole,
  foreignKey: 'tb_usuario_id_usuario'
});
Role.belongsToMany(Usuario, {
  through: UsuarioRole,
  foreignKey: 'tb_role_id_role'
});

Usuario.belongsToMany(ListaCompras, {
  through: UsuarioRole,
  foreignKey: 'tb_usuario_id_usuario'
});
ListaCompras.belongsToMany(Usuario, {
  through: UsuarioRole,
  foreignKey: 'tb_listacompras_id_listaCompras'
});

Role.belongsToMany(ListaCompras, {
  through: UsuarioRole,
  foreignKey: 'tb_role_id_role'
});
ListaCompras.belongsToMany(Role, {
  through: UsuarioRole,
  foreignKey: 'tb_listacompras_id_listaCompras'
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
