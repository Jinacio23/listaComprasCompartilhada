const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/database');

// Cria a instância do Sequelize
const sequelize = new Sequelize(dbConfig);

// Importa os modelos
const models = {
  Usuario: require('./usuario')(sequelize, DataTypes),
  Role: require('./role')(sequelize, DataTypes),
  ListaCompras: require('./listaCompras')(sequelize, DataTypes),
  Produto: require('./produto')(sequelize, DataTypes),
  UsuarioRole: require('./roleUsuario')(sequelize, DataTypes),
  ListaProduto: require('./listaProduto')(sequelize, DataTypes)
};

// Executa os métodos associate() se existirem
Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models);
  }
});

// Exporta tudo
module.exports = {
  Sequelize,
  sequelize,
  ...models
};
