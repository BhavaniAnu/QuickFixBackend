const SubService = require("./../models/subServiceModel");

exports.getAllSubServices = async (req, res) => {
  try {
    const SubServices = await SubService.find(req.query).populate("service");
    res.status(200).json({
      status: "success",
      results: SubServices.length,
      data: {
        SubServices,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getSubServiceByID = async (req, res) => {
  try {
    const subServiceId = await SubService.findById(req.params.id).populate(
      "service"
    );
    res.status(200).json({
      status: "success",
      data: { subServiceId },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createSubService = async (req, res) => {
  try {
    const newSubService = await SubService.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newSubService,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateSubService = async (req, res) => {
  try {
    const subservice = await SubService.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: { subservice },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteSubService = async (req, res) => {
  try {
    await SubService.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
