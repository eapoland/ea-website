const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/wp-json',
    createProxyMiddleware({
      target: 'http://ea-poland-wordpress.azurewebsites.net',
      changeOrigin: true,
    })
  )
}
