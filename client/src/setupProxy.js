const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    process.env.REACT_APP_NAVER_SEARCH_ENDPOINT,
    createProxyMiddleware({
      target: process.env.REACT_APP_NAVER_API_URL,
      changeOrigin: true,
    })
  );
};
