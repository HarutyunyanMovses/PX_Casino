// libs
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
// mongodb
const User = require("../models/userSchame");
const Role = require("../models/roleSchame");
//secret
const SECRET = require("..//config");

const generateAccesToken = (email, roles) => {
  const payload = {
    email,
    roles,
  };
  return jwt.sign(payload, SECRET.SECRET.secret, { expiresIn: "240s" });
};

class authControler {
  async signUp(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ massage: "registration errors", errors });
      }

      const { email, password } = req.body;
      const condidate = await User.findOne({ email });

      if (condidate) {
        return res.status(400).json({ massage: "User already exists" });
      }

      const heshPassword = bcrypt.hashSync(password, 7);
      req.body.password = heshPassword;

      const rolee = await Role.findOne({ value: "USER" });
      req.body.roles = rolee.value;

      const user = new User(req.body);
      const token = generateAccesToken(user.email, user.roles);
      const saved = await user.save();

      return res.json({
        token: {
          token,
          expiresIn: "240s"
        },
        loggedUser_id: saved._id
      });;

    } catch (e) {
      console.log(e);
      res.status(400).json({
        massage: "SignUp error",
      });
    }
  }
  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateAccesToken(user.email, user.roles);
        res.json({
          token: {
            token,
            expiresIn: "240s"
          },
          loggedUser_id: user._id
        });
      } else {
        return res
          .status(401)
          .json({ massage: `Acaunt  ${!user.email ? email : "pasword"} is not found` });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async getToken(req, res) {
    try {
      const reqToken = req.headers.authorization.split(" ")[1];
      const decodeData = jwt.verify(reqToken, SECRET.SECRET.secret);
      const token = generateAccesToken(decodeData.email, decodeData.roles);
      res.json({
        token: {
          token,
          expiresIn: "240s"
        },
      });
    } catch (e) {
      console.log(e);
      return res.status(404).json({ massage: "miban sxal es are" });
    }
  }

  async getUserById(req, res) {
    try {
      const user_id = req.body.loggedUser_id
      const user = await User.findById(user_id)
      const data = {
        fullName: user.name + " " + user.lastname,
        email: user.email,
        gender: user.gender,
        imgs: user.imgs,
        contacts: user.contacts
      }
      res.json(data)
    } catch (e) {
      console.log(e);
      return res.status(404).json({ massage: "user is not found" });
    }
  }
}

module.exports = new authControler();
