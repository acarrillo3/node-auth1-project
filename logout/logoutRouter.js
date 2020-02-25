const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(500).json({ message: "problem logging out" });
      } else {
        res.status(200).json({ message: "You are logged out" });
      }
    });
  } else {
    res.status(200).end({ message: "you are already logged out" });
  }
});

module.exports = router;
