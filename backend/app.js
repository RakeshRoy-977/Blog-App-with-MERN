require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//Routes

app.listen(process.env.PORT || 3003, function () {
  console.log(`server is up at ${process.env.PORT}`);
});
