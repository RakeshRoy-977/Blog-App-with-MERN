require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./DB");

const app = express();

app.use(cors());
app.use(express.json());

//DB
connectToDB();

//Routes
app.use(`/api/auth`, require("./Routes/Auth_Routes"));
app.use(`/api/blog`, require("./Routes/Blog_Routes"));

//listing on
app.listen(process.env.PORT || 3003, function () {
  console.log(`server is up at ${process.env.PORT}`);
});
