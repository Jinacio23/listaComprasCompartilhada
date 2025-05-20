const express = require('express');
const { Role } = require('../models/index.js');

const router = express.Router();

// GET - Listar todos as roles
router.get('/', async (req, res) => {
    try {
        const role = await Role.findAll();
        res.json(role);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar roles', erro: error.message });
    }
});

// GET - Buscar role por ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const role = await Role.findByPk(id);
        if (!role) return res.status(404).json({ mensagem: 'role não encontrada' });
        res.json(role);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar role', erro: error.message });
    }
});

//cadastrar role
//   router.post('/register', async (req, res) => {
//       const { nome } = req.body;

//       try {
//         // Verificar se lista já existe
//         const existente = await Role.findOne({ where: { nome } });
//         if (existente) {
//           return res.status(400).json({ mensagem: 'Já existe outra role com este nome' });
//         }

//         const novaRole = await Role.create({ nome });

//         res.status(201).json({ mensagem: 'role criada com sucesso', role: novaRole });
//       } catch (error) {
//         res.status(500).json({ mensagem: 'Erro ao criar nova role', erro: error.message });
//       }
//     });

// PUT - Atualizar role
//   router.put('/:id', async (req, res) => {
//     const { nome } = req.body;
//     try {
//       const role = await Role.findByPk(req.params.id);
//       if (!role) return res.status(404).json({ mensagem: 'role não encontrado' });

//       role.nome = nome ?? produto.nome;

//       await role.save();
//       res.json(role.toJSON());
//     } catch (error) {
//       res.status(500).json({ mensagem: 'Erro ao atualizar produto', erro: error.message });
//     }
//   });

// DELETE - Deletar role
//   router.delete('/:id', async (req, res) => {
//     try {
//       const role = await Role.findByPk(req.params.id);
//       if (!role) return res.status(404).json({ mensagem: 'role não encontrado' });

//       await role.destroy();
//       res.json({ mensagem: 'role deletada com sucesso' });
//     } catch (error) {
//       res.status(500).json({ mensagem: 'Erro ao deletar role', erro: error.message });
//     }
//   });

module.exports = router;
