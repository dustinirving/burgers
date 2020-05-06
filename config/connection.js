const mysql = require("mysql2");

const defaultConfig = {
  host: "localhost",
  user: "root",
  password: "hyeonmi91",
  database: "burgers_db",
};

module.exports = mysql.createConnection(defaultConfig).promise();
