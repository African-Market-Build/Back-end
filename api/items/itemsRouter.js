const express = require("express");
const router = require("express").Router();
const Items = require("./items-model");
const { checkId, checkBody, idParams } = require("./items-middleware");

router.get("/", (req, res, next) => {
  Items.findAll()
    .then((items) => {
      res.json(items);
    })
    .catch(next);
});

router.get("/:id", idParams, (req, res, next) => {
  Items.findById(req.params.id)
    .then((items) => {
      res.json(items);
    })
    .catch(next);
});

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
  })
    .then((item) => {
      res.status(201).json(item);
    })
    .catch(next);
});

router.put("/:id", idParams, checkBody, checkId, (req, res, next) => {
  Items.update(req.params.id, req.body)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch(next);
});

router.delete("/:id", idParams, (req, res, next) => {
  Items.remove(req.params.id)
    .then((item) => {
      res.json(item);
    })
    .catch(next);
});

module.exports = router;
