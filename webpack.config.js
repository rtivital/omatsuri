const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CnameWebpackPlugin = require('cname-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { argv } = require('yargs');
const babelrc = require('./.babelrc');
const tools = require('./src/data/tools');

const { analyze } = argv;
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const port = 8262;
const entry = path.join(__dirname, './src/index.jsx');
const output = path.join(__dirname, './dist');
const publicPath = '/';

module.exports = {
  mode,

  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },

  devServer: {
    port,
    compress: true,
    contentBase: output,
    publicPath,
    stats: { colors: true },
    hot: true,
    historyApiFallback: true,
  },

  devtool: mode === 'production' ? false : 'eval',

  entry:
    mode === 'production'
      ? entry
      : [
        `webpack-dev-server/client?http://localhost:${port}`,
        'webpack/hot/only-dev-server',
        entry,
      ],

  output: {
    path: output,
    filename: '[hash].bundle.js',
    publicPath,
  },

  resolve: {
    modules: [path.join(__dirname, './node_modules')],
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.join(__dirname, './src'),
        use: {
          loader: 'babel-loader',
          options: babelrc,
        },
      },

      {
        test: /\.(js|jsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/,
      },

      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
      },

      {
        test: /\.(less)$/,
        use: [
          mode === 'production'
            ? {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath,
              },
            }
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName:
                  mode === 'production'
                    ? '[hash:base64:10]'
                    : '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              additionalData: "@import 'open-color/open-color.less';",
            },
          },
          ...(mode === 'production' ? ['postcss-loader'] : []),
        ],
      },

      {
        test: /\.(css)$/,
        use: [
          mode === 'production'
            ? {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath,
              },
            }
            : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },

      {
        test: /\.(svg|png|jpg|gif|woff|woff2|otf|ttf|eot)$/,
        loader: 'file-loader',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(mode) }),
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
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => `
        <!DOCTYPE html>
        <html>
          <head>
            ${htmlWebpackPlugin.tags.headTags}
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet">
            <title>Omatsuri</title>
          </head>
          <body>
            <noscript>
              Enable JavaScript to use Frontend toolbox
            </noscript>

            <div id="app"></div>
            ${htmlWebpackPlugin.tags.bodyTags}
          </body>
        </html>
      `,
    }),
    ...(mode !== 'production'
      ? [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: `http://localhost:${port}` }),
      ]
      : [
        new BundleAnalyzerPlugin({ analyzerMode: analyze ? 'static' : 'disabled' }),
        new MiniCssExtractPlugin(),
        new CnameWebpackPlugin({ domain: 'omatsuri.app' }),
        ...(analyze
          ? []
          : [
            new PrerenderSPAPlugin({
              staticDir: output,
              routes: ['/', '/about', '/404', ...tools.map((tool) => tool.link)],
            }),
          ]),
      ]),
  ],
};
