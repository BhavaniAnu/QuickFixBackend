const express = require("express");
const cartController = require("./../controllers/cartController");

const router = express.Router();

router
  .route("/")
  .get(cartController.getAllCart)
  .post(cartController.createCart);

router
  .route("/:id")
  .get(cartController.getCartByID)
  .patch(cartController.updateCart)
  .delete(cartController.deleteCart);

module.exports = router;
