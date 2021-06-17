const buildValidations = require("./build-utils/build-validations");
const argv = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const path = require("path");
const { WebpackPluginServe: Serve } = require("webpack-plugin-serve");
const commonPaths = require("./build-utils/common-paths");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const commonconfig = {
  output: {
    path: commonPaths.outputPath,
    publicPath: "/",
  },
  target: "web",
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: /[\\/]node_modules[\\/]semantic-ui-([\S]+)[\\/]/,
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/thumb.png`,
    }),
  ],
};

const dev = {
  mode: "development",
  entry: {
    app: [`${commonPaths.appEntry}/index.js`, "webpack-plugin-serve/client"],
  },
  output: {
    filename: "[name].[fullhash].js",
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin(commonPaths.globals),
    new ReactRefreshWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
    }),
    new Serve({
      historyFallback: true,
      liveReload: false,
      hmr: true,
      host: "localhost",
      port: 3000,
      open: true,
      static: commonPaths.outputPath,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      node: "12",
                    },
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "public/images/[name].[ext]",
        },
      },
    ],
  },
  watch: true,
};

const prod = {
  mode: 'production',
  devtool:'source-map',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`],
  },
  output: {
    filename: '[name].[fullhash].js',
    publicPath: ''
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "12",
                  },
                },
              ],
              "@babel/preset-react",
            ],
          },
        },],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
              
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              esModule: true,
              // modules: {
                //   compileType: 'module',
              //   mode: 'local',
              //   exportLocalsConvention: 'camelCaseOnly',
              //   namedExport: true,
              // },
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "dist/images/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin(commonPaths.globals),
    new Serve(),

  ],
};

module.exports = () => {
  const { env, addons: addonsArg } = argv;
  let mergedConfig
  console.log(env);
  if (env==='dev') {
    mergedConfig = merge(commonconfig, dev);
  }else if(env==='prod'){
    mergedConfig = merge(commonconfig, prod);
  }


  return mergedConfig;
};
