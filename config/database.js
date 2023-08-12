const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Vinodku4848:Vinod123@cluster0.z6zy1tq.mongodb.net/db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB Connection Error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;
