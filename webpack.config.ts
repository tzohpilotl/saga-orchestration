import path from "path";

export default {
  mode: "development",
  entry: "./src/index.ts",
  watchOptions: {
    ignored: ["node_modules", "dist"],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "saga.bundle.js",
  },
};
