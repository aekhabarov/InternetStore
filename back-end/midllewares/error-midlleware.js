const ApiError = require("../errors/api-error");

module.exports = function (err, req, res, next) {
  console.log("\x1b[34m", "error-midlleware:", err);
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: "Непредвиденная ошибка" });
};
