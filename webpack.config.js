const config = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"], // loaders applied from right to left
      },
    ],
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
};

module.exports = config;
