/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development", // subentendível
  entry: "./src/main/index.tsx", // primeiro script à rodar na aplicação
  output: {
    path: path.join(__dirname, "public/js"), // pasta aonde será gerada o resultado em js do bundle
    publicPath: "/public/js", // caminho do public
    filename: "bundle.js", // nome do arquivo
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", "scss"], // extensões para o bundle
    alias: {
      "@": path.join(__dirname, "src"), // sempre que encontrar um @ substituir pela pasta source
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: "/node_modules",
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: true,
    port: 5173,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
