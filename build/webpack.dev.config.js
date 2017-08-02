var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge = require('webpack-merge')
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var base = require('./webpack.config');

var config = merge(base, {
	module: {
		rules: [
			{
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
	plugins: [
        new webpack.HotModuleReplacementPlugin(),
	    new HtmlWebpackPlugin({
	        filename: 'app/index/index.html',
	        template: path.resolve(__dirname, '../app/index/index.html'),
	        inject: true
	    })
    ]
})
config.output.publicPath = '/';


// 动态向入口配置中注入 webpack-hot-middleware/client
var devClient = './build/dev-client.js';
config.entry = [devClient].concat(config.entry);
module.exports = config;