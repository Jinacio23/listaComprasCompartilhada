module.exports = (sequelize, DataTypes) => {
  const ListaProduto = sequelize.define('ListaProduto', {
    tb_listaCompras_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true
    },
    tb_Produto_id_Produto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'tb_listaCompras_has_tb_produto',
    timestamps: false
  });

  return ListaProduto;
};
