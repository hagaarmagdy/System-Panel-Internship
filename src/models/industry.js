const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");

const industrySchema = new mongoose.Schema({
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
  main_color: {
    type: String,
    required: true,
  },
  secondary_color: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
});

const Industry = mongoose.model("Industry", industrySchema);

exports.Industry = Industry;
