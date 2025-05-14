const RoleUsuario = require('../models/roleUsuario');

function autorizarRole(rolesPermitidas) {
  return async (req, res, next) => {
    try {
      const usuarioId = req.usuario.id;

      const roles = await RoleUsuario.findAll({
        where: { tb_usuario_id_usuario: usuarioId },
        attributes: ['nome']
      });

      const nomesRoles = roles.map(role => role.nome);

      const autorizado = nomesRoles.some(nome => rolesPermitidas.includes(nome));

      if (!autorizado) {
        return res.status(403).json({ mensagem: 'Acesso negado. Permissão insuficiente.' });
      }

      next();
    } catch (error) {
      return res.status(500).json({ mensagem: 'Erro ao verificar permissões', erro: error.message });
    }
  };
}

module.exports = autorizarRole;
