const express = require("express");
const passport = require("passport");
const router = express.Router();

const postController = require("../controllers/postController");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postController.createPost
);

router.put(
  "/:postId",
  passport.authenticate("jwt", { session: false }),
  postController.updatePost
);

router.delete(
  "/:postId",
  passport.authenticate("jwt", { session: false }),
  postController.deletePost
);

router.get(
  "/byLocation/:latitude/:longitude",
  postController.getPostsByLocation
);

router.get(
  "/dashboardCounts",
  passport.authenticate("jwt", { session: false }),
  postController.getPostDashboardCounts
);

module.exports = router;
