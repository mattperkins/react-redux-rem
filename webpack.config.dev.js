import path from "path";
import webpack from "webpack";

export default {
  devtool: "eval-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack/hot/only-dev-server",
    "webpack-hot-middleware/client?reload=true",
    path.join(__dirname, "/client/index.js")
  ],
  output: {
    path: path.resolve(__dirname, "/dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, "client"),
          path.join(__dirname, "server/validations")
        ],
        loaders: ["react-hot-loader/webpack", "babel-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
