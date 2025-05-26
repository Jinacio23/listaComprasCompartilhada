module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING(45)
  }, {
    tableName: 'tb_role',
    timestamps: false
  });

  Role.associate = (models) => {
    Role.hasMany(models.UsuarioRole, {
      foreignKey: 'role_id'
    });
  };

  return Role;
};
