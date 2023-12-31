const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  // entry: [paths.src + '/index.js'],
  // entry: [paths.src + '/article.js'],
  entry: {
    index: paths.src + '/index.js',
    article: paths.src + '/article.js',
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'casaos blog',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
      chunks: ['index'],
      // inject: false,
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true,
      //   minifyHTML: false,
      //   minifyJS: true,
      // },
    }),

    new HtmlWebpackPlugin({
      title: 'casaos blog',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/article.html', // template file
      // template: paths.src + '/article.html', // template file
      filename: 'article.html', // output file
      chunks: ['article'],
      // inject: false,
      // filename: 'article.html', // output file
      // inject: 'body',
      // scriptLoading: 'blocking',
      // custom: {
      //   navigateTo: 'window.navigateTo = ${navigateTo}',
      // },
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true,
      //   minifyHTML: false,
      //   minifyJS: true,
      // },
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        // type: 'asset/resource',
        generator: {
          filename: '[path][name][ext]',
        },
        // use: ['file-loader']
      },

      // Fonts and SVGs: Inline files
      // { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },

      // HTML: Copy html files to build folder
      { test: /\.html$/i, loader: 'html-loader' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
