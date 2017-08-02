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
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            }
        ]
    },
    plugins: [
        // 提取css为单文件
        new ExtractTextPlugin("[name].[contenthash].css")
    ]
})

module.exports = config;