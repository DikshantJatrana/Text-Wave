const user = require("../models/users");
const { v4: uuidv4 } = require("uuid");
const sessionIdtoUserMap = new Map();

function setuser(id, user) {
  sessionIdtoUserMap.set(id, user);
}

function getuser(id) {
  return sessionIdtoUserMap.get(id);
}

async function handleUserSignUp(req, res) {
  const { Username, Email, Password } = req.body;
  await user.create({
    username: Username,
    email: Email,
    password: Password,
  });
  return res.redirect("login");
}

async function handleUserLogin(req, res) {
  const { Email, Password } = req.body;
  const User = await user.findOne({ email: Email, password: Password });
  if (!user) {
    return res.redirect("/sign-in");
  }
  const Session = uuidv4();
  setuser(Session, User);
  res.cookie("uuid", Session);
  res.redirect("/chat");
}

async function RestrictedToLogin(req, res, next) {
  const uuid = req.cookies?.uuid;
  if (!uuid) {
    return res.redirect("/login");
  }
  const user = getuser(uuid);
  if (!user) {
    return res.redirect("/login");
  }

  req.user = user;
  next();
}
module.exports = {
  setuser,
  getuser,
  handleUserLogin,
  handleUserSignUp,
  RestrictedToLogin,
};
