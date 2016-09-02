var webpack = require('webpack')
var weexloader=require('weex-loader')
var path = require('path');
var fs = require('fs');

//获取所有入口文件
var entry = {};
//获取入口函数
function getEntry(dir) {
  dir = dir || '.'
  var directory = path.join(__dirname, './src', dir);
  fs.readdirSync(directory)
    .forEach(function(file) {
      var fullpath = path.join(directory, file);
      var stat = fs.statSync(fullpath);
      var extname = path.extname(fullpath);
      if (stat.isFile() && extname === '.we') {
        var name = path.join(dir, path.basename(file, extname));
        entry[name] = fullpath + '?entry=true';
      } else if (stat.isDirectory() && file !== 'commonwe') {
        var subdir = path.join(dir, file);
        getEntry(subdir);
      }
    });
}
getEntry();
console.log(entry)
// 配置项开始
var config = {
  entry: entry,
  output: {
      filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loaders: ['weex-loader']
      },
      {
        test: /\.js(\?[^?]+)?$/,
        loaders: ['weex-loader?type=script']
      },
      //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader?limit=8192&name=img/[name].[ext]?[hash]'
      }
    ]
  },//babel 转译  可以使用es5，也可以使用es6 写代码
  babel: {
      presets: ['es2015', 'stage-2'],
      plugins: ['transform-runtime']
  },
  //自动补全识别后缀
  resolve: {
      extensions: ['', '.js', '.we'],
      alias: {
          commonwe: path.resolve(__dirname, './src/commonwe'),
      },
  }
}


module.exports = config;