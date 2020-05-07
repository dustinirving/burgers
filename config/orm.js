// Get access to the connection file
const connection = require("./connection.js");

// Using Object relational mapping to generalize query selectors
const orm = {
  // This method selects all of the data for a particular table and returns the data
  selectAll: async function (table) {
    const sql = "SELECT * FROM ??";

    const [rows] = await connection.query(sql, [table]);
    return rows;
  },

  // This method inserts a new row into the database with a specified table, row and value
  insertOne: async function (table, col, value) {
    const sql = "INSERT INTO ?? SET ?? = ?";

    const [rows] = await connection.query(sql, [table, col, value]);

    return rows;
  },

  // This method updates a specific entry in the database
  // The table, two columns a value and an id are taken as parameters
  // col1 refers to the column that the value is changing
  // col2 refers to the id that matches an i
  updateOne: async function (table, col1, value, col2, id) {
    console.log();
    const sql = "UPDATE ?? SET ?? = ? WHERE ?? = ? ";

    const [rows] = await connection.query(sql, [table, col1, value, col2, id]);

    return rows;
  },

  // This method takes a table, the column and a specified id
  findById: async function (table, col, id) {
    const sql = "SELECT * FROM ?? WHERE ?? = ?";

    const [rows] = await connection.query(sql, [table, col, id]);

    return rows;
  },
};

// The module is exported
module.exports = orm;
