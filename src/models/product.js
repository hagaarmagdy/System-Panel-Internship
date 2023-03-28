const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  name_ar: {
    type: String,
    required: true,
    minlength: 3,
  },
  gallery: [String],
  content: {
    type: String,
    required: true,
    minlength: 3,
  },
  content_ar: {
    type: String,
    required: true,
    minlength: 3,
  },
  tags: [String],
  short_description: {
    type: String,
    minlength: 3,
  },
  short_description_ar: {
    type: String,
    minlength: 3,
  },
  industry: {
    type: mongoose.Types.ObjectId,
    ref: "Industry",
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
  price: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 10,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

exports.Product = Product;
