function restricted(req, res, next) {
  if (req.session && req.session.user) {
    // res.status(200).json({ message: `Welcome ${user.username}` });
    next();
  } else {
    res.status(401).json({ message: "You shall not pass!" });
  }
}

module.exports = restricted;
