const orm = require("../config/orm.js");

class Burger {
  constructor({ burger_name, devoured }) {
    this.burger_name = burger_name;
    this.devoured = devoured;
  }
  static async select() {
    let burgers;
    await orm
      .selectAll("burgers")
      .then((rows) => (burgers = rows))
      .catch(console.error);
    return burgers;
  }
  async insert() {
    let newBurger;
    await orm
      .insertOne("burgers", "burger_name", "newBurger")
      .then((row) => console.table(row))
      .catch(console.error);
    return newBurger;
  }
  async update() {
    let updatedBurger;
    orm
      .updateOne("burgers", "burger_name", "updatedBurger")
      .then((rows) => console.table(rows))
      .catch(console.error);
    return updatedBurger;
  }
}

module.exports = Burger;
