const jwt = require("jsonwebtoken");
const SECRET = require("..//config");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(403).json({ massage: "User is not registred" });
    }
    const decodedData = jwt.verify(token, SECRET.SECRET.secret);
    req.user = decodedData;
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({ massage: "User is not registred" });
  }
};
