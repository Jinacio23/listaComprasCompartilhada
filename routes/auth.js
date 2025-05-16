require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models/index.js');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ mensagem: 'Usuário não encontrado' });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ mensagem: 'Senha inválida' });
    }

    const token = jwt.sign(
      { id: usuario.id_usuario, email: usuario.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao autenticar', erro: error.message });
  }
});

router.post('/register', async (req, res) => {
    const { nome, email, senha } = req.body;
  
    try {
      // Verificar se usuário já existe
      const existente = await Usuario.findOne({ where: { email } });
      if (existente) {
        return res.status(400).json({ mensagem: 'Email já cadastrado' });
      }
  
      const hash = await bcrypt.hash(senha, 10);
      const novoUsuario = await Usuario.create({ nome, email, senha: hash });
  
      res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso', usuario: novoUsuario });
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao cadastrar usuário', erro: error.message });
    }
  });

module.exports = router;
