const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// console.log(path.resolve());  //当前绝对路径 /Users/Code/test-webpack
// console.log(path.join(__dirname, './dist')); //路径拼接 /Users/Code/test-webpack

const config = {
  mode:'development',
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
      },
      { 
        test:/\.js$/, 
        loader: 'babel-loader' //使用babel-loader对js进行编译
      }
    ]
  },
  devServer: {
    hot: true,
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html', //打包后生成的文件名
      template:'./template.html' //生成html的模版文件
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(), //清除构建文件夹
    new CopyWebpackPlugin([
      {
        from:path.join(__dirname, '/assets'),
        to:'assets'
        // 将项目目录下的assets文件复制到构建目录下
      }
    ])
  ]
}

module.exports = config;