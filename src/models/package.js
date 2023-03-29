const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
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
  monthlyPrice_egp: {
    type: Number,
    required: true,
  },
  monthlyPrice_usd: {
    type: Number,
    required: true,
  },
  annualPrice_egp: {
    type: Number,
    required: true,
  },
  annualPrice_usd: {
    type: Number,
    required: true,
  },
  quarterPrice_egp: {
    type: Number,
    required: true,
  },
  quarterPrice_usd: {
    type: Number,
    required: true,
  },
  semiannualPrice_egp: {
    type: Number,
    required: true,
  },
  semiannualPrice_usd: {
    type: Number,
    required: true,
  },
  feature: {
    type: mongoose.Types.ObjectId,
    ref: "Feature",
  },
});


const Package = mongoose.model("Package", packageSchema);

exports.Package = Package;