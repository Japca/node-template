const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const bundleDir = './public'

module.exports = {

    entry: {
        app: './src/client/app.js'
    },
    output: {
        path: path.resolve(__dirname, bundleDir),
        filename: 'bundle.js'

    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|node)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        contentBase: path.join(__dirname, bundleDir),
        host: 'localhost',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}