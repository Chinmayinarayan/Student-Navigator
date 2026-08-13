const errorHandler = (err, req, res, next) => {
  // Log error internally
  if (process.env.NODE_ENV !== "test") {
    console.error(`[Error] ${err.name || "Error"}: ${err.message}`);
    if (err.stack && process.env.NODE_ENV === "development") {
      console.error(err.stack);
    }
  }

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Mongoose bad ObjectId CastError
  if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid ID format for parameter: ${err.path}`;
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    statusCode = 409;
    const field = Object.keys(err.keyValue || {})[0] || "field";
    message = `A record with this ${field} already exists.`;
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
  }

  // JWT errors
  if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Invalid or expired authorization token.";
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" ? { stack: err.stack } : {}),
  });
};

module.exports = errorHandler;