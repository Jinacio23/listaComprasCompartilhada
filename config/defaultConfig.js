const { Produto, ListaCompras, ListaProduto } = require('../models/index.js');

async function criarDadosPadrao() {
  const nomeListaPadrao = 'Compras do Mês';

  // Produtos padrão
  const produtosPadrao = [
    { nomeProduto: 'Arroz', descricao: 'Arroz branco 5kg', quantidade: 1, comprado: false, categoria: 'Alimento' },
    { nomeProduto: 'Sabonete', descricao: 'Sabonete neutro', quantidade: 3, comprado: false, categoria: 'Higiene' }
  ];

  try {
    // Verifica ou cria a lista padrão
    let listaCompras = await ListaCompras.findOne({ where: { nome: nomeListaPadrao } });
    if (!listaCompras) {
      listaCompras = await ListaCompras.create({ nome: nomeListaPadrao });
      console.log(`Lista padrão "${nomeListaPadrao}" criada.`);
    }

    // Cria produtos e associa à lista
    for (const produtoData of produtosPadrao) {
      let produto = await Produto.findOne({ where: { nomeProduto: produtoData.nomeProduto } });
      
      if (!produto) {
        produto = await Produto.create(produtoData);
        console.log(`Produto padrão "${produto.nomeProduto}" criado.`);
      }

      const listaProdutoExiste = await ListaProduto.findOne({
        where: {
          tb_listaCompras_id: listaCompras.id,
          tb_Produto_id_Produto: produto.id_Produto
        }
      });

      if (!listaProdutoExiste) {
        await ListaProduto.create({
          tb_listaCompras_id: listaCompras.id,
          tb_Produto_id_Produto: produto.id_Produto
        });
        console.log(`Produto "${produto.nomeProduto}" adicionado à lista "${listaCompras.nome}".`);
      }
    }

  } catch (err) {
    console.error("Erro ao criar dados padrão:", err);
  }
}

module.exports = criarDadosPadrao;
