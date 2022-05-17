const signup = require("../model/User-signup");
const bcrypt = require("bcryptjs");
exports.addUser = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    const result = await signup.create(req.body);
    res.status(200).json({
      success: true,
      result,
      message: "User added successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      mesasage: "unable",
      error,
    });
  }
};
exports.getSingleUser = async (req, res, next) => {
  try {
    const result = await signup.findById(req.params.id);
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
exports.updateUser = async (req, res, next) => {
  try {
    const result = await signup.findByIdAndUpdate(req.params.id, req.body, {
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
exports.deleteUser = async (req, res, next) => {
  try {
    const result = await signup.findByIdAndDelete(req.params.id);
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
exports.getAllUsers = async (req, res, next) => {
  try {
    const result = await signup.find();
    res.status(200).json({
      success: true,
      count: result.length,
      result,
      message: "Users fetched successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      mesasage: "unable",
      error,
    });
  }
};
exports.destroyUsers = async (req, res, next) => {
  try {
    const result = await signup.deleteMany();
    res.status(200).json({
      success: true,
      result,
      message: "Users Detroyed successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      mesasage: "unable",
      error,
    });
  }
};
