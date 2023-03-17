const express = require("express");
const app = express();
const Joi = require("joi");
const mongoose = require('mongoose');
const products = require("./routes/products");
const categories = require("./routes/categories")
const industries = require("./routes/industries")




mongoose.set("strictQuery", false);


app.use(express.json());
app.use("/api/products", products);
app.use("/api/categories", categories);
app.use("/api/industries", industries);




mongoose.connect("mongodb://localhost/api")
.then(()=>console.log("connected"))
.catch(err =>{console.log("error",err)})


const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
