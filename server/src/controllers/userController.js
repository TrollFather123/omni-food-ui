const { generateToken } = require("../config/jwtProvider");
const userService = require("../services/userService");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);

    const jwt = generateToken(user._id);
    // await cartServices.createCart(user)


    return res.status(201).json({
      status: 201,
      message: "register success",
      token: jwt,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const login = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    const user = await userService.getUserByEmail(email);
    const isPasswordvalid = await bcrypt.compare(password, user.password);

    if (!isPasswordvalid) {
      return next(
        res.status(500).json({
          status: 500,
          message: "Invalid Password",
        })
      );
    }
    const jwt = generateToken(user._id);
    return res.status(200).json({
      status: 200,
      message: "login success",
      token: jwt,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};


module.exports = {
    register,
    login
}