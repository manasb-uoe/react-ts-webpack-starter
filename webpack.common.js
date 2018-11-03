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
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]
}