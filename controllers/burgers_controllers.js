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
  let burger = await Burger.find(req.params.id);
  if (!burger) return res.status(404).end();
  try {
    await Burger.update(req.params.id);
    res.status(200).json(burger);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
