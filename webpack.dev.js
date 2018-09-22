const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackCommon = require('./webpack.common');

webpackCommon.entry = {
    main: './src/index.tsx'
};

webpackCommon.output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
};

webpackCommon.devServer = {
    contentBase: './dist'
};

webpackCommon.plugins = [
    ...webpackCommon.plugins, 
    new HtmlWebpackPlugin({title: 'Webpack Playground'}),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
    })
];

module.exports = webpackCommon;