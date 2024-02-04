var express = require("express");
const {
  handleUserSignUp,
  handleUserLogin,
  RestrictedToLogin,
} = require("../controllers/auth");
var router = express.Router();

/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/error", (req, res) => {
  res.render("error");
});

router.get("/chat", RestrictedToLogin, (req, res) => {
  res.render("chat");
});

router.get("/sign-in", (req, res) => {
  res.render("sign");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/sign-in", handleUserSignUp);
router.post("/login", handleUserLogin);
module.exports = router;
