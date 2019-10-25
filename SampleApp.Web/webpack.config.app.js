const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig(), {
    entry: {
        app: './client/js/app.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[hash].build.js',
        path: path.resolve(__dirname, './wwwroot/dist'),
        library: 'app',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
});