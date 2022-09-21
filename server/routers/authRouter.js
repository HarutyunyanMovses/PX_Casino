// libs
const { Router } = require("express");
const { check } = require("express-validator");
// middleware
const authMiddleware = require("../middleware/authMiddleware");
// controler
const authControler = require("../controllers/authControler")
const router = new Router();

router.post(
  "/signup",
  [
    check("name", " Fill in the Name field").notEmpty(),
    check("lastname", " Fill in the Lastname field").notEmpty(),
    check("email", " Fill in the Email field").isEmail(),
    check(
      "password",
      "Password must be more than 4 and less than 10 characters"
    ).isLength({ min: 4, max: 10 }),
  ],
  authControler.signUp
);
router.get("/refreshtoken", authMiddleware, authControler.getToken);
router.post("/userbyid",authMiddleware, authControler.getUserById)
router.post("/signin", authControler.signIn);

module.exports = router;
