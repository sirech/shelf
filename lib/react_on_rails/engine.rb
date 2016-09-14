# Configure ActionDispatch::Static middleware to serve static files
# from client/dist directory in development and test environment.
module ReactOnRails
  class Engine < ::Rails::Engine
    isolate_namespace ReactOnRails

    unless ENV['REACT_ON_RAILS_ENV'] == 'HOT'

      if %w(development test).include?(Rails.env)
        initializer "#{engine_name}.insert_middleware" do |app|
          Rails.logger.info "RubyOnRails - initialize static file server at #{ReactOnRails.configuration.client_dist_path}"
          app.config.middleware.insert_after(
            ActionDispatch::Static,
            ActionDispatch::Static,
            Rails.root.join(ReactOnRails.configuration.client_dist_path).to_s,
            Rails.application.config.static_cache_control
          )
        end
      end
    end
  end
end
