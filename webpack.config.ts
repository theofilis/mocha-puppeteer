import * as path from 'path';
import * as webpack from 'webpack';

const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

declare var __dirname: any;

const config: webpack.Configuration = {
  target: 'node',
  externals: ['puppeteer', 'chai'],
  context: `${__dirname}/src/`,
  entry: './App.ts',
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader',
      test: /\.ts(x?)$/
    }]
  },
  output: {
    filename: 'mocha-puppeteer.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new WebpackCleanupPlugin()
  ]
};

export default config;
