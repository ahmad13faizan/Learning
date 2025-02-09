const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.scss$/, // Process .scss files
          use: [
            'style-loader', // Injects CSS into the DOM
            'css-loader',   // Resolves CSS imports
            'sass-loader'   // Compiles SCSS to CSS
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // Ensure index.html is inside src/
        filename: 'index.html'
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'), // Serve from dist/
      },
      hot: true, // Enable hot module replacement
      port: 3000,
      open: true, // Open browser automatically
      historyApiFallback: true, // Prevents 404 errors for SPA routing
    },
});
