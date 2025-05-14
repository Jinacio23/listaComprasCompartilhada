module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
      id_role: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {type:DataTypes.STRING(45),allowNull: false},
    }, {
      tableName: 'tb_role',
      timestamps: false
    });
  
    return Role;
  };
  