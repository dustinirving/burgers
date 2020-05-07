// Getting access to the orm file
const orm = require("../config/orm.js");

// Creating a class that takes two parameters in the constructor (burger_name and devoured)
class Burger {
  constructor({ burger_name, devoured = false }) {
    this.burger_name = burger_name;
    this.devoured = devoured;
  }

  // This is a static asynchronous function that selects all values for the "burgers" table
  // It calls the ORM method select all
  // It then returns all of the burgers
  static async select() {
    let burgers;
    await orm
      .selectAll("burgers")
      .then((rows) => (burgers = rows))
      .catch(console.error);
    return burgers;
  }

  // This is a instance function used on objects that have been created with this class
  // It takes a burger parameter and inserts the value into the database via the ORM file
  async insert(burger) {
    let newBurger;
    await orm
      .insertOne("burgers", "burger_name", burger)
      .then((row) => (newBurger = row))
      .catch(console.error);
    return newBurger;
  }

  // This is a static function for the class that updates the devoured property to true
  // This uses the ORM file and the data is updated in the database
  static async update(id) {
    let updatedBurger;
    await orm
      .updateOne("burgers", "devoured", true, "id", id)
      .then((rows) => (updatedBurger = rows))
      .catch(console.error);
    return updatedBurger;
  }

  // This is another static function that finds out if a particular id exists in the database
  static async find(id) {
    let item;
    await orm
      .findById("burgers", "id", id)
      .then((row) => (item = row))
      .catch(console.error);
    return item;
  }
}

// The class is exported
module.exports = Burger;
