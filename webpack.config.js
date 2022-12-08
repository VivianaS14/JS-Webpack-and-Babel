const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: "./src/app/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/app.bundle.js'
    },
    mode: 'production',
    devServer: {
        port: 4000
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    type: "css/mini-extract",
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({
            filename: "./css/app.bundle.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
}