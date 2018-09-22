const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                // replacement for css-loader, generates type definition files for css modules on the fly
                loader: 'typings-for-css-modules-loader',
                query: {
                    modules: true,
                    namedExport: true
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.WatchIgnorePlugin([
            // prevent rebuilds due to generated css type definitions
            /\.css\.d\.ts$/
        ])
    ]
}