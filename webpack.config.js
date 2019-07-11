const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: path.resolve(__dirname, './example/index'),
  output: {
    path: path.resolve(__dirname, './output')
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css)/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'webpack learn',
      template: path.resolve(__dirname, './index.html')
    })
  ],
  devServer: {
    port: 8090,
    open: true,
    quiet: true,
    inline: true,
    noInfo: true,
    overlay: true,
    publicPath: '/',
    contentBase: './dist',
    clientLogLevel: 'none'
  }
}

module.exports = config
