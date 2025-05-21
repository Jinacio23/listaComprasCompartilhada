const express = require('express');
const bcrypt = require('bcryptjs');
const { Usuario } = require('../models/index.js');

const router = express.Router();

// GET - Listar todos os usuários
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      attributes: { exclude: ['senha'] } // não exibir senhas
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar usuários', erro: error.message });
  }
});

// GET - Buscar usuário por ID
router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id, {
      attributes: { exclude: ['senha'] }
    });
    if (!usuario) return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar usuário', erro: error.message });
  }
});

// PUT - Atualizar usuário
router.put('/:id', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ mensagem: 'Usuário não encontrado' });

    usuario.nome = nome ?? usuario.nome;
    usuario.email = email ?? usuario.email;
    if (senha) {
      usuario.senha = await bcrypt.hash(senha, 10);
    }

    await usuario.save();
    const { senha: _, ...usuarioSemSenha } = usuario.toJSON();
    res.json(usuarioSemSenha);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar usuário', erro: error.message });
  }
});

// DELETE - Deletar usuário
router.delete('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ mensagem: 'Usuário não encontrado' });

    await usuario.destroy();
    res.json({ mensagem: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar usuário', erro: error.message });
  }
});

module.exports = router;
