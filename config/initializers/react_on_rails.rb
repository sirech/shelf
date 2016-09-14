ReactOnRails.configure do |config|
  # executed when running "rake assets:precompile"
  # Defaults to "NODE_ENV=production npm run build"
  # config.npm_build_production_command = "NODE_ENV=production npm run build"

  # Depending on your webpack configuration of `output.publicPath` in `webpack.config.js`
  # this has to be set accordingly.
  # Defaults to "/".
  # XING usage example: "assets/jobs/bundle"
  # config.asset_path_prefix = "/"

  # Webpack Devserver port
  # Defaults to "8080"
  # config.webpack_devserver_port = "8080"

  # path on filesystem with Webpack generated build results
  # Defaults to "client/dist"
  # config.client_dist_path = "client/dist"
end
