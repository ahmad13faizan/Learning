// webpack.common.config.js
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Your main JavaScript file
  output: {
    filename: 'bundle.[contenthash].js', // Uses content hashing for cache busting
    path: path.resolve(__dirname, 'dist'),
    clean: true // Automatically clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader' // (Optional) If you want to transpile modern JS
      }
      // SCSS handling is configured differently for development and production.
    ]
  },
  plugins: [
    // ESLintPlugin ensures ESLint runs automatically before bundling.
    new ESLintPlugin({
      extensions: ['js']
      // Optionally enable auto-fixing: fix: true
    })
  ]
};
