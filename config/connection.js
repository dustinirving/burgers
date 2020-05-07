// Get access to the mysql npm packages
const mysql = require("mysql2");
let connection;

// Set the values for the connection to the database

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hyeonmi91",
    database: "burgers_db",
  });
}

connection.connect();

// Export the connection as a promise

module.exports = connection;
