const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "angularIoExample",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "angular",
        filename: "remoteEntry.js",
        exposes: {
          './Heroes': './src/bootstrap.ts',
          './polyfills': './src/polyfills.ts',
          './App': './src/app/app.component.ts'
        },        
        // shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
    sharedMappings.getPlugin()
  ],
};
