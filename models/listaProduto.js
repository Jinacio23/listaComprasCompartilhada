module.exports = (sequelize, DataTypes) => {
  const ListaProduto = sequelize.define('ListaProduto', {
    tb_listaCompras_id_listaCompras: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    tb_Produto_id_Produto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {
    tableName: 'tb_listaCompras_has_tb_produto',
    timestamps: false
  });

  return ListaProduto;
};
