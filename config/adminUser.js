const bcrypt = require('bcryptjs');
const { Usuario, Role } = require('../models/index.js');

async function criarUsuarioPadrao() {
  const emailPadrao = 'admin@admin';

  // Verifica e cria role 'admin'
  const adminRole = await Role.findOne({ where: { name: 'admin' } });
  if (!adminRole) {
    await Role.create({ name: 'admin' });
    console.log('Role "admin" criada.');
  }

  // Verifica e cria role 'user'
  const userRole = await Role.findOne({ where: { name: 'user' } });
  if (!userRole) {
    await Role.create({ name: 'user' });
    console.log('Role "user" criada.');
  }

  // Verifica se o usuário já existe
  const usuarioExistente = await Usuario.findOne({ where: { email: emailPadrao } });
  if (usuarioExistente) return;

  // Cria usuário
  const hash = await bcrypt.hash('admin', 10);
  await Usuario.create({
    nome: 'Admin',
    email: emailPadrao,
    senha: hash
  });

  console.log('Usuário padrão criado com sucesso!');
}

module.exports = criarUsuarioPadrao;
