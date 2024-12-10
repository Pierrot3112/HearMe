module.exports = {
  HOST: "localhost",
  USER: "pierrot3112", 
  PASSWORD: "md(5)123", 
  DB: "db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
