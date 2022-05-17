const express = require("express");
const {
  addUser,
  getSingleUser,
  updateUser,
  deleteUser,
  getAllUsers,
  destroyUsers,
} = require("../controller/user-signup");

const router = express.Router();

router.route("/user").post(addUser).get(getAllUsers).delete(destroyUsers);
router.route("/user/:id").delete(deleteUser).put(updateUser).get(getSingleUser);

module.exports = router;
