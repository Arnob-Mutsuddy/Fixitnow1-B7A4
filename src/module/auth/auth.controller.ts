import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync.js";

import { authValidation } from "./auth.validation.js";
import { authService } from "./auth.service.js";
import sendResponse from "../../utils/sendResponse.js";
import config from "../../config/index.js";

const register = catchAsync(async (req, res) => {
  authValidation.vRegisterInput(req.body);

  const result = await authService.registerUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  authValidation.vLogingInput(req.body);

  const result = await authService.loginUser(req.body);

  res.cookie("refreshToken", result.refreshToken, {
    httpOnly: true,
    secure: config.node_env === "production" ? true : false,
    sameSite: "lax" as const,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login successful",
    data: {
      accessToken: result.accessToken,
      user: result.user,
    },
  });
});

export const authController = {
  register,
  login,
};