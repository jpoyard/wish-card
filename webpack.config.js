const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules(?!\/webpack-dev-server)/,
                use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};

module.exports = config;