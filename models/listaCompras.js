module.exports = (sequelize, DataTypes) => {
  const ListaCompras = sequelize.define('ListaCompras', {
    id_listaCompras: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true
    },
    nome:{
       type: DataTypes.STRING(45),
       allowNull: true
      },
    dataCriacao: DataTypes.DATE
  }, {
    tableName: 'tb_listaCompras',
    timestamps: false
  });

  return ListaCompras;
};
