import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (res, user) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("fintrack_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 3600000, // 1 hour
  });
};

export default generateTokenAndSetCookies;
