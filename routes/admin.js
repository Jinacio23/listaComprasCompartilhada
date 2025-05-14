const express = require('express');
const autenticarToken = require('../middlewares/autenticarToken');
const autorizarRole = require('../middlewares/autorizarRole');

const router = express.Router();

// Rota acessível somente por usuários com role "admin"
router.get('/dashboard', autenticarToken, autorizarRole(['admin']), (req, res) => {
  res.json({ mensagem: 'Acesso permitido ao painel de administrador.' });
});

module.exports = router;
