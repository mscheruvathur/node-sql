const dbConfig = {
  HOST: "localhost",
  USER: "mscheruvathur",
  PASSWORD: "mscheruvathur",
  DB: "node_sequelize_api_db",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export { dbConfig };
