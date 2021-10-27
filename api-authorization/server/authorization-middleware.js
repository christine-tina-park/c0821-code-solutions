const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) {
    throw new ClientError(401, 'authentication required');
  } else {
    try {
      const payload = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = payload;
    } catch (err) {
      next(err);
    }
    next();
  }
}

module.exports = authorizationMiddleware;
