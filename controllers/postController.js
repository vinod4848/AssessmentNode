const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, body, active, latitude, longitude } = req.body;
    const createdBy = req.user._id;
    const post = new Post({
      title,
      body,
      createdBy,
      active,
      location: { type: "Point", coordinates: [latitude, longitude] },
    });
    await post.save();
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
exports.updatePost = async (req, res) => {
  try {
    const { title, body, active, latitude, longitude } = req.body;
    const { id } = req.params;
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        title,
        body,
        active,
        location: { type: "Point", coordinates: [latitude, longitude] },
      },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.status(204).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
exports.getPostsByLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.params;
    const posts = await Post.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
        },
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
exports.getPostDashboardCounts = async (req, res) => {
  try {
    const activeCount = await Post.countDocuments({ active: true });
    const inactiveCount = await Post.countDocuments({ active: false });
    res.status(200).json({ activeCount, inactiveCount });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
