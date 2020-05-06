const connection = require("./connection.js");

const orm = {
  selectAll: async function (table) {
    const sql = "SELECT * FROM ??";

    const [rows] = await connection.query(sql, [table]);
    return rows;
  },

  insertOne: async function (table, col, value) {
    const sql = "INSERT INTO ?? SET ?? = ?";

    const [rows] = await connection.query(sql, [table, col, value]);

    return rows;
  },

  updateOne: async function (table, col1, value, col2, id) {
    console.log();
    const sql = "UPDATE ?? SET ?? = ? WHERE ?? = ? ";

    const [rows] = await connection.query(sql, [table, col1, value, col2, id]);

    return rows;
  },
  findById: async function (table, col, id) {
    const sql = "SELECT * FROM ?? WHERE ?? = ?";

    const [rows] = await connection.query(sql, [table, col, id]);

    return rows;
  },
};

module.exports = orm;
