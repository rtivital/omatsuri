const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CnameWebpackPlugin = require('cname-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProduction = process.env.NODE_ENV === 'production';
const analyze = process.argv.includes('--analyze');
const port = 8262;
const entry = path.join(__dirname, './src/index.tsx');
const output = path.join(__dirname, './dist');
const publicPath = '/';

const templateContent = ({ htmlWebpackPlugin }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      ${htmlWebpackPlugin.tags.headTags}
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="Progressive Web Application with 12 open source frontend focused tools">
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet">
      <title>Omatsuri</title>
    </head>
    <body>
      <noscript>
        Enable JavaScript to use Omatsuri
      </noscript>

      <div id="app"></div>
      ${htmlWebpackPlugin.tags.bodyTags}
    </body>
  </html>
`;

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
  entry,

  output: {
    path: output,
    filename: isProduction ? '[contenthash].bundle.js' : '[name].bundle.js',
    publicPath,
    clean: true,
  },

  resolve: {
    alias: {
      '@hooks': path.join(__dirname, './src/hooks.ts'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.join(__dirname, './node_modules')],
  },

  optimization: {
    minimizer: [new TerserPlugin({}), new CssMinimizerPlugin()],
  },

  devServer: {
    port,
    compress: true,
    static: {
      directory: output,
      publicPath,
    },
    client: {
      overlay: true,
    },
    hot: true,
    open: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, './src'),
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: {
                localIdentName: isProduction
                  ? '[hash:base64:10]'
                  : '[path][name]__[local]--[hash:base64:5]',
                namedExport: false,
                exportLocalsConvention: 'as-is',
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              additionalData: "@import 'open-color/open-color.less';",
            },
          },
          ...(isProduction ? ['postcss-loader'] : []),
        ],
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(svg|png|jpg|gif|woff|woff2|otf|ttf|eot)$/,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
    }),
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, './src/assets/logo.svg'),
      background: '#ffeeee',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: true,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
    new HtmlWebpackPlugin({ templateContent }),
    new HtmlWebpackPlugin({ filename: '404.html', templateContent }),
    ...(isProduction
      ? [
          new BundleAnalyzerPlugin({ analyzerMode: analyze ? 'static' : 'disabled' }),
          new MiniCssExtractPlugin(),
          new CnameWebpackPlugin({ domain: 'omatsuri.app' }),
        ]
      : [new ReactRefreshWebpackPlugin()]),
  ],
};
