const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/db", { 
       target: "https://api.douban.com" ,
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/db": "/"
       },
       // cookieDomainRewrite: "http://localhost:3000"
    }));
};