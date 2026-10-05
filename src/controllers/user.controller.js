import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude password field
    res.status(200).json({
      message: "Users retrieved successfully",
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while retrieving users",
      success: false,
    });
  }
};
