const express = require('express');
const { Produto } = require('../models/index.js');

const router = express.Router();

// GET - Listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar produtos', erro: error.message });
  }
});

// GET - Buscar produto por ID
router.get('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk();
    if (!produto) return res.status(404).json({ mensagem: 'produto não encontrado' });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar produto', erro: error.message });
  }
});

//cadastrar produto
router.post('/register', async (req, res) => {
    const { nomeProduto, descricao, quantidade, comprado, categoria } = req.body;
  
    try {
      // Verificar se produto já existe
      const existente = await Produto.findOne({ where: { nomeProduto } });
      if (existente) {
        return res.status(400).json({ mensagem: 'Produto já existente' });
      }
      
      const novoProduto = await Produto.create({ nomeProduto, descricao, quantidade, comprado, categoria });
  
      res.status(201).json({ mensagem: 'Produto cadastrado com sucesso', produto: novoProduto });
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao cadastrar produto', erro: error.message });
    }
  });

// PUT - Atualizar produto
router.put('/:id', async (req, res) => {
  const { nomeProduto, descricao, quantidade, comprado, categoria } = req.body;
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ mensagem: 'produto não encontrado' });

    produto.nomeProduto = nomeProduto ?? produto.nomeProduto;
    produto.descricao = descricao ?? produto.descricao;
    produto.quantidade = quantidade ?? produto.quantidade;
    produto.comprado = comprado ?? produto.comprado;
    produto.categoria = categoria ?? produto.categoria;

    await produto.save();
    res.json(produto.toJSON());
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar produto', erro: error.message });
  }
});

// DELETE - Deletar produto
router.delete('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ mensagem: 'produto não encontrado' });

    await produto.destroy();
    res.json({ mensagem: 'produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar produto', erro: error.message });
  }
});

module.exports = router;
