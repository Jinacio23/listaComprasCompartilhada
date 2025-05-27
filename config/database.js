const dbConfig = {
  username: 'root',
  password: 'senac',
  database: 'listacompras',
  host: 'localhost',
  dialect: 'mysql',
  port: 3307,
  logging: console.log, // opcional, remove logs no console
};

module.exports = dbConfig;
