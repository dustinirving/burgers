// Get access to the mysql npm packages
const mysql = require("mysql2");

// Set the values for the connection to the database
const defaultConfig = {
  host: "localhost",
  user: "root",
  password: "hyeonmi91",
  database: "burgers_db",
};

// Export the connection as a promise
module.exports = mysql.createConnection(defaultConfig).promise();
