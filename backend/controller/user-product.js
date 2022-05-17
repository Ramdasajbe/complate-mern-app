const product = require("../model/user-producr");

exports.addproduct = async (req, res, next) => {
  try {
    const result = await product.create(req.body);
    res.status(200).json({
      success: true,
      message: "User added successfully",
      result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      mesasage: "unable",
      error,
    });
  }
};

exports.getAllproduct = async (req, res, next) => {
  try {
    const result = await product.find();
    res.status(200).json({
      success: true,
      count: result.length,
      result,
      message: "product fetched successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      mesasage: "unable",
      error,
    });
  }
};

exports.destroyProduct = async (req, res, next) => {
  try {
    const result = await product.deleteMany();
    res.status(200).json({
      success: true,
      result,
      message: "product Detroyed successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      mesasage: "unable",
      error,
    });
  }
};

exports.deleteproduct = async (req, res, next) => {
  try {
    const result = await product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      result,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      mesasage: "unable",
      error,
    });
  }
};

exports.updateproduct = async (req, res, next) => {
  try {
    const result = await product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      result,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      mesasage: "unable",
      error,
    });
  }
};

exports.getSingleproduct = async (req, res, next) => {
  try {
    const result = await product.findById(req.params.id);
    res.status(200).json({
      success: true,
      result,
      message: "User found successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      mesasage: "unable",
      error,
    });
  }
};
