const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");
const { Product } = require("../models/product");


router.get("/", async (req, res) => {
  const product = await Product.find();
  if (!product) res.status(400).send("Invalid request");
  res.send(product);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) res.status(400).send("Invalid id");
  res.send(product);
});

router.post("/", async (req, res) => {
  let product = new Product({
    name: req.body.name,
    name_ar: req.body.name_ar,
    gallery: req.body.gallery,
    content: req.body.content,
    content_ar: req.body.content_ar,
    tags: req.body.tags,
    short_description: req.body.short_description,
    short_description_ar: req.body.short_description_ar,
    industry: req.body.industry,
    category: req.body.category,
    price: req.body.price,
    sku: req.body.sku,
    quantity: req.body.quantity,
  });

  product = await product.save();
  res.send(product);
});

router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id, {
    name: req.body.name,
  });
  if (!product) res.status(400).send("Product not found");

  res.send(product);
});

router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      name_ar: req.body.name_ar,
      gallery: req.body.gallery,
      content: req.body.content,
      content_ar: req.body.content_ar,
      tags: req.body.tags,
      short_description: req.body.short_description,
      short_description_ar: req.body.short_description_ar,
      industry: req.body.industry,
      category: req.body.category,
      price: req.body.price,
      sku: req.body.sku,
      quantity: req.body.quantity,
    },
    {
      new: true,
    }
  );
  if (!product) res.status(400).send("Product not found");

  res.send(product);
});

module.exports = router;
