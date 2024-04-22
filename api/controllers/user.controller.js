import bcryptjs from "bcryptjs";
import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import { errorHandler } from "../middleware/error.js";

export const test = (req, res) => {
  res.json({
    message: "Api route is working!",
  });
};

// Update user
export const updateUser = asyncHandler(async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only update your own account!'));
  try {
    // If password is provided, hash it
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    // next update the user in the database
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, // id of the user to update
      {
        // update the user with the new data
        $set: {
          username: req.body.username,  
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true } // required to turn new to true
    );

    // destructure the password from the rest of the user object
    const { password, ...rest } = updatedUser.toObject();
    // return the rest of the user object in the response
    res.status(200).json(rest);
  } catch (error) {
    // if an error occurs, call the next middleware with the error
    next(error);
  }
});
