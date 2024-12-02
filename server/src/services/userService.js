const { getUserIdFromToken } = require("../config/jwtProvider");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const createUser = async (userData) => {
  try {
    let { fullName, email, password, role } = userData;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("Email already taken");
    }

    password = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password,
      role,
    });

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId).populate("addresses");

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const findUserProfileByJwt = async (jwt) => {
  try {
    const userId = await getUserIdFromToken(jwt);

    const user = await User.findById(userId);

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const findAllUsers = async () => {
  try {
    const users = await User.find();

    return users;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  findUserProfileByJwt,
  findAllUsers,
};
