const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
const pkg = require('./package.json')

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    disableHostCheck: true,
    compress: true,
    port: 8000
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  plugins: [
    new HtmlWebpackPlugin({ title: pkg.name })
  ]
}