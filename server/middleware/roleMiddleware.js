const jwt = require("jsonwebtoken");
const SECRET = require("..//config");

module.exports = function (roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(403).json({ massage: "User is not registred" });
      }
      const userRoles  = jwt.verify(token, SECRET.SECRET.secret).roles;
      let hasRole = false;
      if(roles.includes(userRoles)){
        hasRole = true
      }
      if (hasRole == false) {
        return res
          .status(403)
          .json({ massage: "You do not have access to request data" });
      }
      next();
    } catch (e) {
      return res.status(403).json({ massage: "User is not registred" });
    }
  };
}
