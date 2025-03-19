const roleMiddleware = (role) => {req, res, next
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "You don't have permission to access this route" });
    }
    next();
  }
}

module.exports = roleMiddleware;
