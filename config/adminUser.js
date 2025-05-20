const bcrypt = require('bcryptjs');
const { Usuario } = require('../models/index.js')

async function criarUsuarioPadrao() {
  const emailPadrao = 'admin@admin';

  const existente = await Usuario.findOne({ where: { email: emailPadrao } });

  //Valida se usuario existe
  if (existente) {
    return;
  }
  const hash = await bcrypt.hash('admin', 10);
  await Usuario.create({
    nome: 'Admin',
    email: emailPadrao,
    senha: hash
  });
  console.log('Usuário padrão criado com sucesso!');
}

module.exports = criarUsuarioPadrao;