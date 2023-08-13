const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  active: Boolean,
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
  timestamp: { type: Date, default: Date.now },
});

postSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Post", postSchema);
