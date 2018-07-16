'use strict';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
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
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                loader: ['style-loader', 'css-loader',  'resolve-url-loader', 'sass-loader']
              },
              {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                  loader: "url-loader",
                  options: {
                    limit: 25000,
                  },
                },
              },
        ]
    },
    devServer: {
        historyApiFallback: true,
        host: 'localhost',
        port: 3000
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
    ],
};  
