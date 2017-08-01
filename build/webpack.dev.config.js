var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        filename: 'app/index/index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })
];

// 动态向入口配置中注入 webpack-hot-middleware/client
var devClient = path.resolve(__dirname, '../build/dev-client.js');
config.entry = [devClient].concat(config.entry);
module.exports = config;