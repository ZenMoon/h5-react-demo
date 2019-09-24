const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use(
      proxy('/cate', {
          target: 'https://resource.smartisan.com',
          changeOrigin: true,
          secure: false,
          pathRewrite:{
              "^/cate":''
          }
      })
    );
    // app.use(
    //   proxy('/catelist', {
    //     target: 'https://shopapi.smartisan.com',
    //     changeOrigin: true,
    //     secure: false,
    //     autoRewrite:true,
    //     pathRewrite:{
    //         "^/catelist":''
    //     }
    //   })
    // )
}





