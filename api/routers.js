const express = require("express");

const usersRouter = require("../users/usersRouter");
const registerRouter = require("../register/registerRouter");
const loginRouter = require("../login/loginRouter");
const logoutRouter = require("../logout/logoutRouter");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/logout", logoutRouter);

router.get("/", (req, res) => {
  res.status(200).json({ api: `it's running` });
});

module.exports = router;
