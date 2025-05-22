const express = require('express');
const { ListaProduto, UsuarioRole } = require('../models/index.js');
const usuario = require('../models/usuario.js');

const router = express.Router();

// POST /api/action/:idLista/produtos/:idProduto
//Cadastrar produto na lista
router.post('/:idLista/produtos/:idProduto', async (req, res) => {
  const idLista = Number(req.params.idLista);
  const idProduto = Number(req.params.idProduto);

  if (isNaN(idLista) || isNaN(idProduto)) {
    return res.status(400).json({ mensagem: 'IDs inválidos.' });
  }

  try {
    const existente = await ListaProduto.findOne({
      where: {
        tb_listaCompras_id: idLista,
        tb_Produto_id_Produto: idProduto
      }
    });

    if (existente) {
      return res.status(400).json({ mensagem: 'Produto já está na lista.' });
    }

    await ListaProduto.create({
      tb_listaCompras_id: idLista,
      tb_Produto_id_Produto: idProduto
    });

    res.status(201).json({ mensagem: 'Produto adicionado à lista com sucesso.' });
  } catch (error) {
    console.error('Erro ao adicionar produto à lista:', error);
    res.status(500).json({ mensagem: 'Erro ao adicionar produto à lista.', erro: error.message });
  }
});

//POST - /api/action/:idUsuario/:idRole/lista/:idLista
//adicionar nova lista ao usuario
router.post('/:idUsuario/:idRole/lista/:idLista', async (req, res) => {
  const idUsuario = Number(req.params.idUsuario);
  const idRole = Number(req.params.idRole);
  const idLista = Number(req.params.idLista);

  if (isNaN(idUsuario) || isNaN(idRole) || isNaN(idLista)) {
    return res.status(400).json({ mensagem: 'IDs inválidos.' });
  }

  try {
    const existente = await UsuarioRole.findOne({
      where: {
        usuario_id: idUsuario,
        role_id: idRole,
        tb_listaCompras_id: idLista
      }
    });

    if (existente) {
      return res.status(400).json({ mensagem: 'Lista adicionada a usuário.' });
    }

    await UsuarioRole.create({
      usuario_id: idUsuario,
      role_id: idRole,
      tb_listaCompras_id: idLista
    });

    res.status(201).json({ mensagem: 'Lista adicionada à usuário com sucesso.' });
  } catch (error) {
    console.error('Erro ao adicionar lista à usuário:', error);
    res.status(500).json({ mensagem: 'Erro ao adicionar lista à usuário.', erro: error.message });
  }
});

module.exports = router;
