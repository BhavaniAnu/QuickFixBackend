const express = require("express");
const orderController = require("./../controllers/orderController");

const router = express.Router();

router
  .route("/")
  .get(orderController.getAllOrder)
  .post(orderController.createOrder);

router
  .route("/:id")
  .get(orderController.getOrderByID)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
