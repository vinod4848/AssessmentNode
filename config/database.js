const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Vinodku4848:Vinod123@cluster0.z6zy1tq.mongodb.net/db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;


