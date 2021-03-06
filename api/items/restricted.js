const { JWT_SECRET } = require("../secrets");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: "token required" });
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(200).json({ message: "invalid token" });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  }
};
