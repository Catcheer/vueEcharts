const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    // ExtractTextPlugin = require("extract-text-webpack-plugin"),
    webpack = require('webpack'); //这里引入webpack是为了使用webpack的热更新功能以及其他自带插件，见 module.exports.plugins

module.exports = {
    devtool: 'source-map',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    entry: {
        // vendor: ['./lib/jquery-3.2.1.min.js', './lib/vue.min.js','./lib/echarts.js'],
        // vendor: ['./lib/jquery-3.2.1.min.js'],
        bundle: ['./js/app.js']
    },
    output: {
        filename: "[name].[hash:8].bundle.js",
        chunkFilename: "[name].js",
        'path': path.resolve(__dirname, 'dist'),
        publicPath: ''
    },

    // entry: './lib/app.js',


    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader'
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './page/echarts.html',
            filename: 'index.html'
        }),
        // new ExtractTextPlugin("style.css"),
        // 开启webpack全局热更新
        new webpack.HotModuleReplacementPlugin(),

        // 当接收到热更新信号时，在浏览器console控制台打印更多可读性高的模块名称等信息
        // new webpack.NamedModulesPlugin()
        // new webpack.optimize.CommonsChunkPlugin({
            // name: "vendor",
            // filename: "commons.js",
            // filename: "vendor.js"
            // (Give the chunk a different name)

            // minChunks: Infinity,
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        // }),
    ],

    // 定义webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, "dev"),
        compress: true,
        port: 8080
    }

}