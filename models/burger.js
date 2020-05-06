const orm = require("../config/orm.js");

class Burger {
  constructor({ burger_name, devoured }) {
    this.burger_name = burger_name;
    this.devoured = devoured;
  }
  static async select() {
    orm
      .selectAll("burgers")
      .then((rows) => console.table(rows))
      .catch(console.error);
  }
  async insert() {
    orm
      .insertOne("burgers", "burger_name", "newBurger")
      .then((rows) => console.table(rows))
      .catch(console.error);
  }
  async update() {
    orm
      .updateOne("burgers", "burger_name", "updatedBurger")
      .then((rows) => console.table(rows))
      .catch(console.error);
  }
}

module.exports = Burger;
