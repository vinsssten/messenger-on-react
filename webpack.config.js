const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'main.[contenthash:5].css'
    })
]

module.exports = (argv) => {
    const devMode = argv.mode == 'development';
    return {
        mode: devMode ? 'development' : 'production',
        devtool: devMode ? 'source-map' : false,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.[contenthash:5].js'
        },
        plugins,
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /(node_modules|bower_components|server)/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '',
                            },
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: devMode ?
                                '[path][name]__[local]--[hash:base64:5]' :
                                '[hash:base64]',
                            }
                        },
                        {
                            test: /\.(png|jpg|svg|otf|ttf)$/,
                            use: 'file-loader'
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: [
                '.js',
                '.jsx',
                '.ts',
                '.tsx'
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            open: true,
            compress: true,
            port: 8080, 
            watchContentBase: true,
            progress: true,
            historyApiFallback: true,
            hot: true,
        }
    }
}