const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");
const { Category } = require("../models/category");
const middleware = require("../middleware/middleware");
const schema = require("../validators/schemas");

router.get("/", async (req, res) => {
  const category = await Category.find();
  res.send(category);
});

router.get("/:id",middleware(schema.categoryList, 'query'), async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.send(category);
});

router.post("/",middleware(schema.Category,'body'),async (req, res) => {
  let category = new Category({
    name: req.body.name,
    name_ar: req.body.name_ar,
    code: req.body.code,
    industry: req.body.industry,
  });

  category = await category.save();
  res.send(category);
});

router.delete("/:id", async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.id, {
    name: req.body.name,
  });
  if (!category) res.status(400).send("Category not found");

  res.send(category);
});

router.put("/:id", async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      name_ar: req.body.name_ar,
      code: req.body.code,
      industry: req.body.industry,
    },
    {
      new: true,
    }
  );
  if (!category) res.send(400).send("Category not found");
  res.send(category);
});

module.exports = router;
