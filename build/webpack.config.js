var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
	entry: path.resolve(__dirname, '../app/index/index.js'),
	output: {
		path: path.resolve(__dirname, '../output/static'),
		publicPath: 'static/',
		filename: '[name].[hash].js',
		chunkFilename: '[id].[chunkhash].js'
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: { 'vue': 'vue/dist/vue.js' }
	},
	module: {
		rules: [
		    {
		    	test: /\.js$/,
		    	loader: 'babel-loader?presets[]=es2015',
		    	exclude: /node_modules/
		    },
		    { 
		    	test: /\.css$/, 
		    	loader: 'style-loader!css-loader' 
		    },
      		{ 
      			test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
      			loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      		}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: '../index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
			inject: true
		}),
		new webpack.ProvidePlugin({
	        $:"jquery",
	        jQuery:"jquery",
	        "window.jQuery":"jquery"
   	    })
	]
}