const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  store: {
    type: mongoose.Types.ObjectId,
    ref: "Store",
  },
});

const Customer = mongoose.model("Customer", customerSchema);

exports.Customer = Customer;
