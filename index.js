const express = require("express");
const app = express();
const Joi = require("joi");
const mongoose = require("mongoose");
const products = require("./src/routes/products");
const categories = require("./src/routes/categories");
const industries = require("./src/routes/industries");
const packages = require("./src/routes/packages");
const features = require("./src/routes/features");

mongoose.set("strictQuery", false);

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/system-panel-db/products", products);
app.use("/system-panel-db/categories", categories);
app.use("/system-panel-db/industries", industries);
app.use("/system-panel-db/packages", packages);
app.use("/system-panel-db/features", features);

mongoose
  .connect("mongodb://localhost/system-panel-db")
  .then(() => console.log("connected"))
  .catch((err) => {
    console.log("error", err);
  });

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
