const express = require("express");
const subServiceController = require("./../controllers/subServiceController");

const router = express.Router();

router
  .route("/")
  .get(subServiceController.getAllSubServices)
  .post(subServiceController.createSubService);

router
  .route("/:id")
  .get(subServiceController.getSubServiceByID)
  .patch(subServiceController.updateSubService)
  .delete(subServiceController.deleteSubService);

module.exports = router;
