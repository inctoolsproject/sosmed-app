const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const { requireLogin } = authController;
const { userDetail, follow, unfollow, updateMe, searchUsers } = userController;

router.get("/:id", requireLogin, userDetail);
router.put("/follow", requireLogin, follow);
router.put("/unfollow", requireLogin, unfollow);
router.put("/updateMe", requireLogin, updateMe);
router.post("/search-users", requireLogin, searchUsers);

module.exports = router;
