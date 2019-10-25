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
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            // get the name. E.g. node_modules/packageName/not/this/part.js
                            // or node_modules/packageName
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                            // npm package names are URL-safe, but some servers don't like @ symbols
                            return `modules/vendor.${packageName.replace('@', '')}`;
                        },
                    },
                }
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
            })
        ]
    };
}