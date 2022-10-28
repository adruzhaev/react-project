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
            clean: true,
            assetModuleFilename: (pathData) => {
            const filepath = path
                .dirname(pathData.filename)
                .split("/")
                .slice(1)
                .join("/");
            return `${filepath}/[name].[hash][ext][query]`;
            },
        },
        module: {
            rules: [
                {
                    test: /\.(ts)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/i,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.jpg$/i,
                    type: 'asset/resource'
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
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