const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  name_ar:{
    type: String,
    required: true,
    minlength: 3
},
  code:{
    type: String,
    required: true
  },
  industry: {
    type: mongoose.Types.ObjectId,
    ref: "Industry"
  }
});

const Category = mongoose.model("Category", categorySchema);

exports.Category = Category;
