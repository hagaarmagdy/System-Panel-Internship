const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");
const { Package } = require("../models/package");

router.get("/", async (req, res) => {
  const package = await Package.find();
  res.send(package);
});

router.get("/:id", async (req, res) => {
  const package = await Package.findById(req.params.id);
  res.send(package);
});

router.post("/", async (req, res) => {
  let package = new Package({
    name: req.body.name,
    name_ar: req.body.name_ar,
    code: req.body.code,
    monthlyPrice_egp: req.body.monthlyPrice_egp,
    monthlyPrice_usd: req.body.monthlyPrice_usd,
    annualPrice_egp: req.body.annualPrice_egp,
    annualPrice_usd: req.body.annualPrice_usd,
    quarterPrice_egp: req.body.quarterPrice_egp,
    quarterPrice_usd: req.body.quarterPrice_usd,
    semiannualPrice_egp: req.body.semiannualPrice_egp,
    semiannualPrice_usd: req.body.semiannualPrice_usd,
    feature: req.body.feature,
  });

  package = await package.save();
  res.send(package);
});

router.put("/:id", async (req, res) => {
  const package = await Package.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      name_ar: req.body.name_ar,
      code: req.body.code,
      monthlyPrice_egp: req.body.monthlyPrice_egp,
      monthlyPrice_usd: req.body.monthlyPrice_usd,
      annualPrice_egp: req.body.annualPrice_egp,
      annualPrice_usd: req.body.annualPrice_usd,
      quarterPrice_egp: req.body.quarterPrice_egp,
      quarterPrice_usd: req.body.quarterPrice_usd,
      semiannualPrice_egp: req.body.semiannualPrice_egp,
      semiannualPrice_usd: req.body.semiannualPrice_usd,
      feature: req.body.feature,
    },
    {
      new: true,
    }
  );
  if (!package) res.status(400).send("Package id not found");
  res.send(package);
});

router.delete("/:id", async (req, res) => {
  const package = await Package.findByIdAndRemove(req.params.id, {
    name: req.body.name,
  });
  if (!package) res.status(400).send("Package not found");
  res.send(feapackageture);
});

module.exports = router;
