const express = require("express");
const {
  getAllproduct,
  addproduct,
  destroyProduct,

  deleteproduct,
  updateproduct,
  getSingleproduct,
} = require("../controller/user-product");

const router = express.Router();

router
  .route("/product")
  .post(addproduct)
  .get(getAllproduct)
  .delete(destroyProduct);
router
  .route("/product/:id")
  .delete(deleteproduct)
  .put(updateproduct)
  .get(getSingleproduct);
module.exports = router;
