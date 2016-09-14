module ReactOnRails
  class Configuration
    # executed when running 'rake assets:precompile'
    # Defaults to 'NODE_ENV=production npm run build'
    attr_accessor :npm_build_production_command

    # Depending on your webpack configuration of `output.publicPath` in `webpack.config.js`
    # this has to be set accordingly.
    # Defaults to '/'.
    attr_accessor :asset_path_prefix

    # Webpack Devserver port
    # Defaults to '8080'
    attr_accessor :webpack_devserver_port

    # path on filesystem with Webpack generated build results
    # Defaults to 'client/dist'
    attr_accessor :client_dist_path

    def initialize
      @npm_build_production_command = 'NODE_ENV=production npm run build'
      @asset_path_prefix = '/'
      @webpack_devserver_port = '8080'
      @client_dist_path = 'client/dist'
    end
  end
end
