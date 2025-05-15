require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models');

// Middleware
app.use(express.json());

// Rotas
const authRoutes = require('./routes/auth');
const protegidoRoutes = require('./routes/protegidoExample'); // exemplo de rota protegida
const adminRoutes = require('./routes/admin');

app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/protegido', protegidoRoutes);

// Banco de dados
sequelize.sync({ force: false })
  .then(() => console.log('Banco sincronizado'))
  .catch(err => console.error(err));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`---------------\nServidor rodando na porta ${PORT}\n---------------\n`);
});
