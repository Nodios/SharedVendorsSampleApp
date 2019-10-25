const path = require('path');
const webpack = require('webpack');

module.exports = function (options, argv) {
    options = options || {};

    return {
        // for optimizations see: https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
        resolve: {
            extensions: ['.js', '.json', '.jsx']
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                $: path.resolve(__dirname, './wwwroot/lib/jquery/jquery.min.js')
            }),
            new webpack.DllReferencePlugin({
                manifest: path.resolve(__dirname, './wwwroot/dist/vendors/vendor-manifest.json')
            })
        ]
    };
}