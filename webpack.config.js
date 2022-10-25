const path = require('path')
const { merge } = require('webpack-merge')
const dev = require('./webpack.dev.js')
const prod = require('./webpack.prod.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
    const isProduction = env.MODE === 'production'
    const webpackConfig = isProduction ? prod : dev

    return merge({
        entry: './src/index.tsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.(ts)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, '/src/index.html')
            })
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
        },
    }, webpackConfig)
}