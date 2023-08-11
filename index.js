const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const database = require("./config/database");
require("./config/passport");

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
