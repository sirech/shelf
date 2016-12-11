var util = require('util')
var webpack = require('webpack')
var appRoot = require('app-root-path')

var pkg = require('./package.json')
var HopsPlugin = require('hops/plugin')

module.exports = require('hops/etc/webpack.base.js')
  .merge(require('hops/etc/webpack.watch')._raw) // eslint-disable-line no-underscore-dangle
  .modify(function (cfg) {
    cfg.hops.dll = {}
    return cfg
  })
  .removePlugin(webpack.DllReferencePlugin)
  .merge({
    hops: {
      config: require.resolve('hops/etc/webpack.node.js'),
      dll: [{
        path: util.format('hops-%s.js', pkg.version),
        source: appRoot.resolve('.tmp/webpack/watch/hops.js')
      }]
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: appRoot.toString(),
        manifest: appRoot.require('.tmp/webpack/watch/hops.json')
      }),
      new HopsPlugin({})
    ],
    output: {
      path: appRoot.resolve('dist'),
      publicPath: 'http://localhost:8080/'
    }
  })
