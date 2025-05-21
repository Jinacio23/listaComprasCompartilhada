const express = require('express');
const { ListaCompras } = require('../models/index.js');

const router = express.Router();

// GET - Listar todos as listas
router.get('/', async (req, res) => {
    try {
        const lista = await ListaCompras.findAll();
        res.json(lista);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar produtos', erro: error.message });
    }
});

// GET - Buscar lista por ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const lista = await ListaCompras.findByPk(id);
        if (!lista) return res.status(404).json({ mensagem: 'lista não encontrado' });
        res.json(lista);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar lista', erro: error.message });
    }
});

//cadastrar lista
router.post('/register', async (req, res) => {
    const { nome } = req.body;

    try {
        // Verificar se lista já existe
        const existente = await ListaCompras.findOne({ where: { nome } });
        if (existente) {
            return res.status(400).json({ mensagem: 'Já existe outra lista com este nome' });
        }

        const novaLista = await ListaCompras.create({ nome });

        res.status(201).json({ mensagem: 'Lista criada com sucesso', lista: novaLista });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao criar nova lista', erro: error.message });
    }
});

// PUT - Atualizar lista
router.put('/:id', async (req, res) => {
    const { nome } = req.body;
    try {
        const lista = await ListaCompras.findByPk(req.params.id);
        if (!lista) return res.status(404).json({ mensagem: 'lista não encontrado' });

        lista.nome = nome ?? produto.nome;

        await lista.save();
        res.json(lista.toJSON());
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao atualizar produto', erro: error.message });
    }
});

// DELETE - Deletar lista
router.delete('/:id', async (req, res) => {
    try {
        const lista = await ListaCompras.findByPk(req.params.id);
        if (!lista) return res.status(404).json({ mensagem: 'lista não encontrado' });

        await lista.destroy();
        res.json({ mensagem: 'lista deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao deletar lista', erro: error.message });
    }
});


module.exports = router;
