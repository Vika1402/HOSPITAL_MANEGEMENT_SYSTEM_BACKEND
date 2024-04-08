import dotenv from 'dotenv';
dotenv.config();

export const generateToken = (user, message, statusCode, res) => {
  if (!user) {
    return res.status(statusCode).json({
      success: false,
      message: "User not found",
    });
  }

  const token = user.generateJsonWebToken();
  if (!token) {
    return res.status(statusCode).json({
      success: false,
      message: "Failed to generate token",
    });
  }

  const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
