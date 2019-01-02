var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
//var autoprefixer = require('autoprefixer');
const webpack = require("webpack");






module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-3"]
        }
      },
      {
        test: /(\.css)$/,
        loaders: ["style-loader", "css-loader"]
        //loader: ExtractTextPlugin.extract("style", "css")
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
        //loader: ExtractTextPlugin.extract("style","css!sass")
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: "file-loader?limit=1024&name=images/[path][name].[ext]"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    // add the plugin to your plugins array
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body"      
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true  
  },
  devtool: "source-map",
  bail: true
};
