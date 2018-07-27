const path = require('path');
const app = require('./package.json');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const assets = path.resolve(__dirname, 'src/assets');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.scss', '.css', '.html']
  },
  devServer: {
    contentBase: 'dist',
    port: 3000
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(src, 'index.html'),
      hash: true,
      inject: 'body',
      favicon: path.resolve(assets, 'favicon.ico'),
      minify: {
        collapseWhitespace: true
      },
      title: app.name,
      filename: 'index.html'
    })
  ],
  serve: {
    content: [assets],
    dev: {
      logLevel: 'info',
      writeToDisk: true
    }
  }
};
