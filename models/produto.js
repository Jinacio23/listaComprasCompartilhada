module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id_Produto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nomeProduto: {type:DataTypes.STRING(45),allowNull: false},
    descricao: {type:DataTypes.STRING(250),allowNull: false},
    quantidade: {type:DataTypes.INTEGER,allowNull: false},
    comprado: {type:DataTypes.BOOLEAN,allowNull: false},
    categoria: {type:DataTypes.STRING(50),allowNull: false}
  }, {
    tableName: 'tb_produto',
    timestamps: false
  });

  return Produto;
};
