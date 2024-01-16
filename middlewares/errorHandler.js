function errorHandler(err, req, res, next) {
  console.error(err.stack);

  const response = {
    status: "Failed",
    errorName: err.name,
    errorMessage: err.message,
  };

  res.status(500).type("application/json").send(response);
}

module.exports = errorHandler;
