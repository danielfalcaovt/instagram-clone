import { join } from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export const mode = "development";
export const entry = "./src/main/index.tsx";
export const output = {
  path: join(__dirname, "public/js"), // pasta aonde será gerada o resultado em js do bundle
  publicPath: "/public/js", // caminho do public
  filename: "bundle.js", // nome do arquivo
};
export const resolve = {
  extensions: [".js", ".ts", ".tsx", "scss"], // extensões para o bundle
  alias: {
    "@": join(__dirname, "src"), // sempre que encontrar um @ substituir pela pasta source
  },
};
export const module = {
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
};
export const devServer = {
  static: {
    directory: join(__dirname, "public"),
  },
  devMiddleware: {
    writeToDisk: true,
  },
  historyApiFallback: true,
  port: 5173,
};
export const externals = {
  react: "React",
  "react-dom": "ReactDOM",
};
export const plugins = [
  new CleanWebpackPlugin(),
];
