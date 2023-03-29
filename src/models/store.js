const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: true,
    minlength: 3,
  },
  domain: {
    type: String,
    required: true,
    unique: true,
  },
  subdomain: {
    type: String,
    required: true,
    unique: true,
  },
  adminName: {
    type: String,
    required: true,
    minlength: 3,
  },
  adminEmail: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  adminPassword: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  package: {
    type: mongoose.Types.ObjectId,
    ref: "Package",
  },
  industry: {
    type: mongoose.Types.ObjectId,
    ref: "Industry",
  },
});

const Store = mongoose.model("Store", storeSchema);

exports.Store = Store;
