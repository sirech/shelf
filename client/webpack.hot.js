var appRoot = require('app-root-path')

module.exports = require('hops/etc/webpack.watch.js')
  .merge({
    output: {
      path: appRoot.resolve('dist'),
      publicPath: 'http://localhost:8080'
    }
  })
