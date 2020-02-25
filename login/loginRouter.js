const express = require("express");
const router = express.Router();
const Login = require("./loginModel");
const bcrypt = require("bcryptjs");

router.post("/", (req, res) => {
  const userCreds = req.body;

  Login.findUser(userCreds.username)
    .then(user => {
      // If user is in db and password matches, login.
      if (user && bcrypt.compareSync(userCreds.password, user.password)) {
        // Save session
        req.session.user = user;
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: " You shall not pass!" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(500).json({ message: "problem logging out" });
      } else {
        res.status(200).json({ message: " you are logged out" });
      }
    });
  } else {
    res.status(200).end({ message: "you are already logged out" });
  }
});

module.exports = router;
