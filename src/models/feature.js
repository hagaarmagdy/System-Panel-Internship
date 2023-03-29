const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
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
  code: {
    type: String,
    required: true,
  },
  price_egp: {
    type: Number,
    required: true,
  },
  price_usd: {
    type: Number,
    required: true,
  },
});

const Feature = mongoose.model("Feature", featureSchema);

exports.Feature = Feature;
