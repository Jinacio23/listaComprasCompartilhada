const bcrypt = require('bcryptjs');
const { Usuario, Role } = require('../models/index.js');
const { where } = require('sequelize');

async function criarUsuarioPadrao() {
  const emailPadrao = 'admin@admin';
  const roles = ['admin', 'user'];

  const usuarioExistente = await Usuario.findOne({ where: { email: emailPadrao } });
  const rolesExistentes = await Role.findOne({ where: { name: roles[0] } && { name: roles[1] } });

  //Valida se roles existe
  if (rolesExistentes) {
    await Role.create({
      name: 'admin'
    });
    await Role.create({
      name: 'user'
    });
    console.log('Roles criadas com sucesso!');
  }

  //Valida se usuario existe
  if (usuarioExistente) return;
  const hash = await bcrypt.hash('admin', 10);
  await Usuario.create({
    nome: 'Admin',
    email: emailPadrao,
    senha: hash
  });
  console.log('Usuário padrão criado com sucesso!');
}

module.exports = criarUsuarioPadrao;