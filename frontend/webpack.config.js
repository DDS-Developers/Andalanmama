const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
// eslint-disable-next-line prefer-destructuring
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const prodMode = process.env.NODE_ENV === 'production';

const browserConfig = {
  stats: 'normal',
  mode: prodMode ? 'production' : 'development',
  bail: !!prodMode,
  devtool: prodMode ? 'source-map' : 'cheap-module-eval-source-map',
  entry: [path.join(__dirname, './src/web/browser')],
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: path.join(__dirname, './build/'),
    filename: prodMode ? 'static/js/[name].[hash].js' : 'static/js/[name].js',
    chunkFilename: prodMode ? 'static/js/[name].[hash].chunk.js' : 'static/js/[name].chunk.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.hbs$/, loader: 'handlebars-loader' },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.svg$/,
        use: [
          // Inline files smaller than 10 kB
          {
            loader: 'svg-url-loader',
            options: { limit: 10 * 1024, noquotes: true },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: path.resolve(__dirname, '../'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [['@babel/preset-env'], '@babel/preset-react'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-react-jsx',
              'react-loadable/babel',
            ],
            env: {
              development: {
                plugins: ['react-hot-loader/babel'],
              },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: prodMode ? 'static/css/[name].[hash].css' : 'static/css/[name].css',
      chunkFilename: prodMode ? 'static/css/[id].[hash].css' : 'static/css/[id].css',
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'labtek-knods',
      filename: 'service-worker.js',
      staticFileGlobs: ['build/**/*.{js,html,css}'],
      minify: true,
      stripPrefix: 'build/',
    }),
    new HtmlWebPackPlugin({
      title: 'Andalan Mama',
      template: 'src/web/templates/index.hbs',
      filename: './index.html',
      inject: true,
      serviceWorkerLoader: `<script>${fs.readFileSync(
        path.join(
          __dirname,
          prodMode ? './src/web/service-worker-prod.js' : './src/web/service-worker-dev.js',
        ),
        'utf-8',
      )}</script>`,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
};

// optimizer
if (prodMode) {
  browserConfig.plugins = browserConfig.plugins.concat([
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: false,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info',
    }),
  ]);

  browserConfig.optimization = {
    minimize: true,
    runtimeChunk: true,
    splitChunks: { chunks: 'all' },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: { ecma: 8 },
          compress: { ecma: 5, warnings: false, comparisons: false, inline: 2 },
          mangle: { safari10: true },
          output: { ecma: 5, comments: false, ascii_only: true },
        },
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
    ],
  };
}

const serverConfig = {
  mode: prodMode ? 'production' : 'development',
  entry: path.join(__dirname, './src/web/server'),
  target: 'node',
  output: {
    path: path.join(__dirname, './build/'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'cheap-module-eval-source-map',
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.(css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.svg$/,
        use: [
          // Inline files smaller than 10 kB
          {
            loader: 'svg-url-loader',
            options: { limit: 10 * 1024, noquotes: true },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: path.resolve(__dirname, '../'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [['@babel/preset-env'], '@babel/preset-react'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-react-jsx',
            ],
          },
        },
      },
    ],
  },
};

if (process.env.NODE_TARGET === 'ssr') {
  module.exports = [browserConfig, serverConfig];
} else {
  module.exports = browserConfig;
}

// module.exports = [ browserConfig, serverConfig ]
