import { Request, Response } from "express";
import User from "../models/users.model";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { auth0Id } = req.body;
  const exisingUser = await User.findOne({ auth0Id });
  if (exisingUser) {
    throw new ApiError(400, "User already exists");
  }

  const user = new User(req.body);
  await user.save();
  if (!user) {
    throw new ApiError(500, "User registration failed");
  }
  res
    .status(200)
    .json(
      new ApiResponse(200, user.toObject(), "User registered successfully")
    );
});

export { registerUser };
