const bcrypt = require('bcryptjs');
const { Usuario, Role } = require('../models/index.js');

async function criarUsuarioPadrao() {
  // Define roles
  let adminRole = await Role.findOne({ where: { name: 'admin' } });
  if (!adminRole) {
    adminRole = await Role.create({ name: 'admin' });
    console.log('Role "admin" criada.');
  }

  let userRole = await Role.findOne({ where: { name: 'user' } });
  if (!userRole) {
    userRole = await Role.create({ name: 'user' });
    console.log('Role "user" criada.');
  }

  // Criação do admin
  const emailAdmin = 'admin@admin';
  const adminExistente = await Usuario.findOne({ where: { email: emailAdmin } });

  if (!adminExistente) {
    const hashAdmin = await bcrypt.hash('admin', 10);
    const novoAdmin = await Usuario.create({
      nome: 'Admin',
      email: emailAdmin,
      senha: hashAdmin
    });

    // Atribuir role 'admin' ao usuário
    // await novoAdmin.addRole(adminRole);
    console.log('Usuário admin criado com sucesso!');
  }

  // Criação do user
  const emailUser = 'user@user';
  const userExistente = await Usuario.findOne({ where: { email: emailUser } });

  if (!userExistente) {
    const hashUser = await bcrypt.hash('user', 10);
    const novoUser = await Usuario.create({
      nome: 'User',
      email: emailUser,
      senha: hashUser
    });

    // Atribuir role 'user' ao usuário
    // await novoUser.addRole(userRole);
    console.log('Usuário padrão "user" criado com sucesso!');
  }
}

module.exports = criarUsuarioPadrao;
