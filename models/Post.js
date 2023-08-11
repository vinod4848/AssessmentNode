const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  active: Boolean,
  location: {
    type: { type: String },
    coordinates: [Number],
  },
});

postSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Post", postSchema);
