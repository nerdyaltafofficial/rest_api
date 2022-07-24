const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// to config .env files
require("dotenv/config");

app.use(bodyParser.json());

//imports routes

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//db
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Db connected");
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
