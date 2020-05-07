// Access the npm package for express
const express = require("express");

// Get access the class Burger file
const Burger = require("../models/burger");

// Initialize a router variable
const router = express.Router();

// This route is for the main page
// It retrieves the existing burgers from the database and then renders the index page
router.get("/", async function (req, res) {
  // Calling the static async function from the Burger class
  const data = await Burger.select();
  res.render("index", { burgers: data });
});

// This api is used to retrieve the existing burgers in the database
router.get("/api/burgers", async function (req, res) {
  try {
    // Calling the static async function from the Burger class
    const burgers = await Burger.select();
    // Send a 200 response and the data as json
    res.status(200).json({ data: burgers });
  } catch (err) {
    // If there is an error from the database
    res.status(500).json(err);
  }
});

// This is a post request to the api/burgers
router.post("/api/burgers", async function (req, res) {
  try {
    // Creating a new post
    // A new object is created and stored in a variable base on the client's request
    const burger = new Burger(req.body);
    // Using the insert object method with the name of the new burger
    burger.insert(burger.burger_name);
    // Send a 201 response to show the database has been updated and send back json
    res.status(201).json(burger);
  } catch (err) {
    // If there is an error from the database
    res.status(500).json(err);
  }
});

// This is a patch request
router.patch("/api/burgers/:id", async function (req, res) {
  // Check to see if the item to be updated exists
  let burger = await Burger.find(req.params.id);
  // If not send a 404 error
  if (!burger) return res.status(404).end();
  try {
    // Otherwise update the entry into the database
    await Burger.update(req.params.id);
    // Send a 200 response and send back json
    res.status(200).json(burger);
  } catch (err) {
    // If there is an error from the database
    res.status(500).json(err);
  }
});

// Export the router module
module.exports = router;
