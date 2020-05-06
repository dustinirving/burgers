const express = require("express");
const Burger = require("../models/burger");

const router = express.Router();

router.get("/", async function (req, res) {
  const data = await Burger.select();
  res.render("index", { burgers: data });
});

router.get("/api/burgers", async function (req, res) {
  try {
    const burgers = await Burger.select();
    res.status(200).json({ data: burgers });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/api/burgers", async function (req, res) {
  try {
    const burger = new Burger(req.body);
    burger.insert(burger.burger_name);
    res.status(201).json(burger);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/api/burgers/:id", async function (req, res) {
  try {
    let burger = await Burger.update(req.params.id);
    // burger = await Object.assign(burger, req.body, { id: req.params.id });
    // console.log(burger);
    res.status(200).json(burger);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
