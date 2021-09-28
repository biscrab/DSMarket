const createProxyMiddleware = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://13.124.26.107:9095',
            changeOrigin: true,
        })
    );
};