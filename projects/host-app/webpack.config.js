const { withModuleFederationPlugin, shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'host-app',

  remotes: {
    mfeApp: 'http://localhost:4300/remoteEntry.js',  // needed to access stuff // not need to create file // auto matically generated from webpack
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});