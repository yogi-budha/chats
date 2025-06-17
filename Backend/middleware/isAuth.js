import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "User is not authenticated" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECREAT);
    if (!decodedToken) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.id = decodedToken.userId;
    next();
  } catch (error) {
    console.log("Auth error:", error.message);
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};
