// Dotenv
require("dotenv").config();

// Get access to the mysql npm packages
const mysql = require("mysql2");
let connection;

// Set the values for the connection to the database
// Use the JawsDb if it's deployed, otherwise use local connections settings
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "burgers_db",
  });
}

// Make a connection
connection.connect();

// Export the connection as a promise
module.exports = connection.promise();
