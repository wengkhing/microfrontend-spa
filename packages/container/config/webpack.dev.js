const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3300/',
  },
  devServer: {
    port: 3300,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      remotes: {
        marketing: 'marketing@http://localhost:3301/remoteEntry.js',
        auth: 'auth@http://localhost:3302/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:3303/remoteEntry.js',
        angular: 'angular@http://localhost:3304/remoteEntry.js',
      },
      exposes: {
        './Header': './src/expose/header.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
