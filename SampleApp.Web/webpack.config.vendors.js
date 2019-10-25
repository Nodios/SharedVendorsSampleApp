const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: [
        'react',
        'react-dom',
        'mobx',
        'mobx-react'
    ],
    output: {
        filename: 'vendors.[hash].js',
        path: path.resolve(__dirname, './wwwroot/dist/vendors'),
        library: 'vendor_lib_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: 'vendor_lib_[hash]',
            path: path.resolve(__dirname, './wwwroot/dist/vendors/vendor-manifest.json')
        })
    ]
};