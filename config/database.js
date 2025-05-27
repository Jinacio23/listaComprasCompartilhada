const dbConfig = {
  username: 'root',
  password: '',
  database: 'listacompras',
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: console.log, // opcional, remove logs no console
};

module.exports = dbConfig;
