var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                include: SRC_DIR,
                use :[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
              test: /\.(jpg|png|gif)$/,
              use: 'file-loader'
            },
            {
              test: /\.(woff|woff2|eot|ttf|svg)$/,
              use: {
                loader: 'url-loader',
                options: {
                  limit: 100000
                }
              }
            }

        ]
    },
    plugins:[
      new webpack.ProvidePlugin({
        $: 'jquery'
      }),
      new HtmlWebpackPlugin({
      template: 'index.html',
      chunksSortMode: 'dependency'
    })
    ]
};

module.exports = config;
