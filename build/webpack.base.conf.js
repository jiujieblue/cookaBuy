var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var glob = require('glob');
var entries = getEntry('./src/module/**/*.js'); // 获得入口js文件
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'module/register': './src/module/register/register.js',
    'module/login': './src/module/login/login.js',
    'module/index': './src/module/index/index.js',
    'module/hotSale': './src/module/hotSale/hotSale.js',
    'module/visitingMarket': './src/module/visitingMarket/visitingMarket.js',
    'module/detail': './src/module/detail/detail.js',
    'module/search': './src/module/search/search.js',
    'module/sellerAllProduct': './src/module/sellerAllProduct/sellerAllProduct.js',
    'module/publicDetail': './src/module/publicDetail/publicDetail.js',
    'module/contactUs': './src/module/contactUs/contactUs.js',
    'module/aboutUs': './src/module/aboutUs/aboutUs.js',
    'module/buyerFootprint': './src/module/buyerFootprint/buyerFootprint.js',
    'module/buyerWalletWdrlRecord': './src/module/buyerWalletWdrlRecord/buyerWalletWdrlRecord.js',
    'module/sellerClaim': './src/module/sellerClaim/sellerClaim.js',
    'module/sellerClaimCond': './src/module/sellerClaimCond/sellerClaimCond.js',
    'module/uf': './src/module/uf/uf.js',
    'module/orderConfirm': './src/module/orderConfirm/orderConfirm.js',
    'module/cart': './src/module/cart/cart.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.ico'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.ico$/,
        loader: 'file'
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'file',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  vue: {
    loaders: utils.cssLoaders()
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks : Infinity
      }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ]
}

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
    entries[pathname] = entry;
  });
  // console.log("base-entrys:");
  // console.log(entries);
  return entries;
}
