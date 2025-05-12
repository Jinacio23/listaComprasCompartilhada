// const mysql = require('mysql2/promise');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('listaCompras', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// sequelize.sync({ force: false }) // force: true recria as tabelas
//   .then(() => console.log('Banco sincronizado'))
//   .catch(err => console.error('Erro ao sincronizar banco:', err));

module.exports = sequelize;

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'listaCompras',
//   waitForConnections: true,
//   connectionLimit: 10
// });

// (async () => {
//   try {
//     const connection = await pool.getConnection();
//     console.log("Conectado ao banco de dados!");
//     connection.release();
//   } catch (err) {
//     console.error("Falha ao conectar:", err.message);
//   }
// })();

// module.exports = pool;