const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const jsLoaders = [{
    loader: 'babel-loader',
}];

const plugins = [
    new HtmlWebpackPlugin({
        title: 'Form builder',
        template: 'src/index.ejs',
        filename: 'index.html',
        inject: 'body',
        hash: true
    }),
    new CleanWebpackPlugin(['public/*'])
];

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src/bootstrap.jsx'),
        vendor: ['react', 'react-dom', 'prop-types']
    },
    context: __dirname,
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src/modules')
        ]
    },
    module: {
        rules: [{
            test: /(\.js|\.jsx)$/,
            exclude: [/node_modules/, /bower_components/],
            use: jsLoaders,
        }]
    },
    plugins
};