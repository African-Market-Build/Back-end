const express = require("express");
const router = require("express").Router();
const Items = require("./items-model");
const { checkId, checkBody } = require("./items-middleware");

router.post("/", checkBody, checkId, (req, res, next) => {
  const {
    item_name,
    item_location,
    item_description,
    item_price,
    available,
    owner_id,
  } = req.body;
  Items.insert({
    item_name,
    item_location,
    item_description,
    item_price,
    available,
    owner_id,
  }).then((item) => {
    res.status(201).json(item);
  });
});

module.exports = router;
