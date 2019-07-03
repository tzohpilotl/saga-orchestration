const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'saga.bundle.js'
  }
};
