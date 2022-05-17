const signup = require("../model/User-signup");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await signup.findOne({ email });
    if (!result) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, result.password);
    if (!isMatch) {
      throw new Error("Password is incorrect");
    }

    const token = jwt.sign({ id: result._id }, process.env.JWT_KEY, {
      expiresIn: "30000",
    });

    res.status(200).json({
      message: "Login Successfully",
      result: {
        id: result._id,
        name: result.name,
        email: result.email,
        isAdmin: result.isAdmin,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};
