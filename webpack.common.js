const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const webpack = require('webpack');

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