module.exports = {
    HOST: "localhost", // Usually does not need updating
    USER: "postgres", // This is default username
    PASSWORD: "root", // You might have to set password for this 
    DB: "logindb", // The DB we created in Prerequisites section
    dialect: "postgres", // to tell Sequelize that we are using PostgreSQL
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };