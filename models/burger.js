const orm = require("../config/orm.js");

class Burger {
  constructor({ burger_name, devoured = false }) {
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
  async insert(burger) {
    let newBurger;
    await orm
      .insertOne("burgers", "burger_name", burger)
      .then((row) => (newBurger = row))
      .catch(console.error);
    return newBurger;
  }
  static async update(id) {
    let updatedBurger;
    await orm
      .updateOne("burgers", "devoured", true, "id", id)
      .then((rows) => (updatedBurger = rows))
      .catch(console.error);
    return updatedBurger;
  }

  static async find(id) {
    let item;
    await orm
      .findById("burgers", "id", id)
      .then((row) => (item = row))
      .catch(console.error);
    return item;
  }
}

module.exports = Burger;
