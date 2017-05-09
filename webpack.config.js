const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: path.resolve(__dirname, 'src', 'js', 'Main.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src', 'js'),
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.scss$/,
				include: path.resolve(__dirname, 'src', 'css'),
				exclude: /node_modules/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "postcss-loader"
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			}]
	},
	resolve: {
		alias: {
			Components: path.resolve(__dirname, 'src/js/components/')
		}
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html',
		}),
	]
}