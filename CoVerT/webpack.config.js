const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './covert.js',
  output: {
    filename: 'covert.min.js',
    path: path.resolve(__dirname, 'dist'),
    library:'StegCloak'
  },
  plugins: [
    new HtmlWebpackPlugin(),
]
}
