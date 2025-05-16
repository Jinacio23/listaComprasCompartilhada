module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id_Produto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true
    },
    nomeProduto: {type:DataTypes.STRING(45),allowNull: true},
    descricao: {type:DataTypes.STRING(250),allowNull: true},
    quantidade: {type:DataTypes.INTEGER,allowNull: true},
    comprado: {type:DataTypes.BOOLEAN,allowNull: true},
    categoria: {type:DataTypes.STRING(50),allowNull: true}
  }, {
    tableName: 'tb_produto',
    timestamps: false
  });

  return Produto;
};
