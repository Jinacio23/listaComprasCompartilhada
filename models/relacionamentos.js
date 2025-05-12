const Usuario = require('./usuario');
const ListaCompras = require('./listaCompras');
const Produto = require('./produto');

// Associação entre listas e produtos (n:n)
ListaCompras.belongsToMany(Produto, {
    through: 'tb_listaCompras_has_tb_produto',
    foreignKey: 'tb_listaCompras_id_listaCompras',
});
Produto.belongsToMany(ListaCompras, {
    through: 'tb_listaCompras_has_tb_produto',
    foreignKey: 'tb_Produto_id_Produto',
});

// Associação entre usuários, listas e roles (n:n)
Usuario.belongsToMany(ListaCompras, {
    through: 'tb_role_has_tb_usuario',
    foreignKey: 'tb_usuario_id_usuario',
});
ListaCompras.belongsToMany(Usuario, {
    through: 'tb_role_has_tb_usuario',
    foreignKey: 'tb_listaCompras_id_listaCompras',
});

module.exports = {
    Usuario,
    ListaCompras,
    Produto,
};