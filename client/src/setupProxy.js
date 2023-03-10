const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    process.env.REACT_APP_ENDPOINT,
    createProxyMiddleware({
      target: process.env.REACT_APP_BASEURL,
      changeOrigin: true,
    })
  );
  app.use(
    '/open-api/search',
    createProxyMiddleware({
      target: process.env.REACT_APP_BASEURL,
      changeOrigin: true,
    })
  );
  app.use(
    '/api/search',
    createProxyMiddleware({
      target: process.env.REACT_APP_BASEURL,
      changeOrigin: true,
    })
  );
};
