// Middleware para manejar rutas no soportadas (404)
const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };
  
  // Middleware para manejar errores
  const errorHandler = (error, req, res, next) => {
    if (res.headersSent) {
      return next(error);
    }
  
    res.status(error.status || 500).json({
      message: error.message || "An unknown error occurred",
    });
  };
  
  module.exports = { notFound, errorHandler };
  