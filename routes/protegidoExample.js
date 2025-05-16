const express = require('express');
const autenticarToken = require('../middlewares/autenticarToken');

const router = express.Router();

// Exemplo de rota protegida
router.get('/', autenticarToken, (req, res) => {
  res.json({ mensagem: 'Você acessou uma rota protegida!', usuario: req.usuario });
});

module.exports = router;
