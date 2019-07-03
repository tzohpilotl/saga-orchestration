const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  watchOptions: {
    ignored: ['node_modules', 'dist']
  },
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
