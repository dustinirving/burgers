const connection = require("./connection.js");

const orm = {
  selectAll: async function (table) {
    const sql = "SELECT * FROM ??";

    const [rows] = await connection.query(sql, [table]);
    return rows;
  },

  insertOne: async function (table, col, value) {
    const sql = "INSERT INTO burgers SET ?? = ?";

    const [rows] = await connection.query(sql, [table, col, value]);

    return rows;
  },

  updateOne: async function (table, col, value) {
    const sql = "UPDATE ?? SET ?? = ?";

    const [rows] = await connection.query(sql, [table, col, value]);

    return rows;
  },
};

module.exports = orm;
