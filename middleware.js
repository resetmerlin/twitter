exports.requireLogin = (req, res, next) => {
  // So this right here, this next basically passes onto the next step in the request response cycle.
  if ((req, session && req.session.user)) {
    return next();
  } else {
    return res.redirect("/login");
  }
};
