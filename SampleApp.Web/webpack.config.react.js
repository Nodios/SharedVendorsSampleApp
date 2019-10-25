const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig(), {
    entry: {
        'react-app': './client/ui/index.js'
    },
    output: {
        filename: '[name].[hash].build.js',
        path: path.resolve(__dirname, './wwwroot/dist')
    }
});
