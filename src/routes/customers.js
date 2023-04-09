const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");
const { Customer } = require("../models/customer");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  bcrypt.hash(req.body.password, 10, async (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    } else {
      let customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        store: req.body.store,
      });
      customer = await customer.save();
      res.send(customer);
    }
  });
});


module.exports = router;