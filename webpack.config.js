const path = require('path');

// console.log(path.resolve());  //当前绝对路径 /Users/Code/test-webpack
// console.log(path.join(__dirname, './dist')); //路径拼接 /Users/Code/test-webpack

const config = {
  entry:'./src/index.js',
  output:{
    filename:'bundle.js', //指定打包后的文件名
    path: path.join(__dirname, './dist1') //指定打包后的路径，此处为绝对路径，利用path.join()进行路径拼接
  },
  module:{
    rules:[
      { 
        test:/\.css$/, //用于标识出应该被对应的 loader 进行转换的某个或某些文件
        use: ['style-loader', 'css-loader'] //表示进行转换时，应该使用哪个 loader
      },
      { 
        test:/\.(scss|sass)$/, 
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}

module.exports = config;