const express = require('express');
const app = express();
const sequelize = require('./config/database');

// Middlewares
app.use(express.json());

// Models e associações
require('./models/usuario');
require('./models/listaCompras');
require('./models/produto');
require('./models/listaProduto');
require('./models/roleUsuario');
require('./models/relacionamentos');

// Conectar e sincronizar
sequelize.sync({ force: false })
  .then(() => console.log('Banco sincronizado'))
  .catch(err => console.error(err));

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
