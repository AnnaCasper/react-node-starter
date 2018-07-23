'use strict';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
		loaders: [
            { 
				test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
            {
				test: /\.(sass|scss|css)$/,
				loader: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
			},

			{
				test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
				use: 'file-loader?name=[name].[ext]?[hash]'
			},
		
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			
			{
				test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			},

			{
				test: /\.otf(\?.*)?$/,
				use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf'
			}
        ]
    },
    devServer: {
        historyApiFallback: true,
        host: 'localhost',
        port: 3000,
        proxy: {
            '/api': {
              target: 'http://localhost:8000',
              secure: false,
              changeOrigin: true,
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/index.html', 
            filename: 'index.html' 
        }),
        new DotenvPlugin({
            sample: './.env.default',
            path: './.env'
        }),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' }
        ]),
        new webpack.ProvidePlugin({
            'Promise': 'es6-promise',
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
		new webpack.EnvironmentPlugin({
            "NODE_ENV": 'development'
        })
    ],
};  
