const webpack = require('webpack')
const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const VENDOR_LIBS = [
//     'react', 'react-dom', 'react-redux', 'react-bootstrap', 'react-router-dom',
//     'redux', 'redux-promise', 'redux-form',
//     'lodash', 'axios',
// ]

 const bundleDir = './public'


module.exports = {
    entry: {
        main: './src/client/app.js'
      
    },
    output: {
        path: path.resolve(__dirname, bundleDir),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
            //     }),
            // },
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
        // new CleanWebpackPlugin([bundleDir]),
        // new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest']
        // }),

        // new HtmlWebpackPlugin({
        //     template: 'src/main/resources/templates/index.html'
        // }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({minimize: true}),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}


