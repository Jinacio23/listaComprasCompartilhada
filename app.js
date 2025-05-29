require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { sequelize } = require('./models');
const criarUsuarioPadrao = require('./config/adminUser')

// Middleware
app.use(express.json());
app.use(cors());

// Rotas
const authRoutes = require('./routes/auth');
const protegidoRoutes = require('./routes/protegidoExample'); // exemplo de rota protegida
const adminRoutes = require('./routes/admin');
const usuarioRoutes = require('./routes/usuarioRoute');
const produtoRoutes = require('./routes/produtoRoute');
const listaRoutes = require('./routes/listaCompraRoute');
const roleRoutes = require('./routes/roleRoute');
const actionRoutes = require('./routes/actionsRoute');
const criarDadosPadrao = require('./config/defaultConfig');

app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/protegido', protegidoRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/produto', produtoRoutes);
app.use('/api/lista', listaRoutes);
app.use('/api/role', roleRoutes);
app.use('/api/action', actionRoutes);

// Iniciar servidor
async function iniciar() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida.');

    await sequelize.sync({ alter: true });

    await criarUsuarioPadrao();
    await criarDadosPadrao();

    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error.message);
  }
}
iniciar();