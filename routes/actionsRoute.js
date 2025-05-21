const express = require('express');
const { ListaProduto } = require('../models/index.js');

const router = express.Router();

// POST /api/listas/:idLista/produtos/:idProduto
router.post('/:idLista/produtos/:idProduto', async (req, res) => {
  const idLista = Number(req.params.idLista);
  const idProduto = Number(req.params.idProduto);

  console.log('Params recebidos:', { idLista, idProduto });

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

module.exports = router;
