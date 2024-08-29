const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const student=require("./Route/studentRoute")
app.use(express.json());

mongoose.connect(process.env.CONNECTION)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.error("Error connecting to DB: ", error));


  app.use("/student", student);


app.listen(3300, () => {
  console.log("Server is running on port 3300");
});
