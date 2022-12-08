const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/app/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/app.bundle.js'
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]
}