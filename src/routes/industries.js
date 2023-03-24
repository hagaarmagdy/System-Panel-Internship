const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");
const { Industry } = require("../models/industry");

router.get("/", async (req, res) => {
  const industry = await Industry.find();
  res.send(industry);
});

router.get("/:id", async (req, res) => {
  const industry = await Industry.findById(req.params.id);
  res.send(industry);
});

router.post("/", async (req, res) => {
  let industry = new Industry({
    name: req.body.name,
    name_ar: req.body.name_ar,
    code: req.body.code,
    main_color: req.body.main_color,
    secondary_color: req.body.secondary_color,
    category: req.body.category,
  });

  industry = await industry.save();
  res.send(industry);
});

router.delete("/:id", async (req, res) => {
  const industry = await Industry.findByIdAndRemove(req.params.id, {
    name: req.body.name,
  });
  if (!industry) res.status(400).send("Industry not found");
  res.send(industry);
});

router.put("/:id", async (req, res) => {
  const industry = await Industry.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      name_ar: req.body.name_ar,
      code: req.body.code,
      main_color: req.body.main_color,
      secondary_color: req.body.secondary_color,
      category: req.body.category,
    },
    {
      new: true,
    }
  );
  if (!industry) res.status(400).send("Industry id not found");
  res.send(industry);
});

module.exports = router;