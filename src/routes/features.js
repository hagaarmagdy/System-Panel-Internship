const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");
const { Feature } = require("../models/feature");

router.get("/", async (req, res) => {
  const feature = await Feature.find();
  res.send(feature);
});

router.get("/:id", async (req, res) => {
  const feature = await Feature.findById(req.params.id);
  res.send(feature);
});

router.post("/", async (req, res) => {
  let feature = new Feature({
    name: req.body.name,
    name_ar: req.body.name_ar,
    code: req.body.code,
    price_egp: req.body.price_egp,
    price_usd: req.body.price_usd,
  });
  feature = await feature.save();
  res.send(feature);
});

router.put("/:id", async (req, res) => {
  const feature = await Feature.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      name_ar: req.body.name_ar,
      code: req.body.code,
      price_egp: req.body.price_egp,
      price_usd: req.body.price_usd,
    },
    {
      new: true,
    }
  );
  if (!feature) res.status(400).send("Feature id not found");
  res.send(feature);
});

router.delete("/:id", async (req, res) => {
  const feature = await Feature.findByIdAndRemove(req.params.id, {
    name: req.body.name,
  });
  if (!feature) res.status(400).send("Feature not found");
  res.send(feature);
});


module.exports = router;
