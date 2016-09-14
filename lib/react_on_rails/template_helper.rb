module ReactOnRails
  module TemplateHelper
    extend self

    def self.prepare_template(name)
      if ::ReactOnRails.hot_reload_enabled?
        request_prerendered_template_from_devserver(name)
      else
        read_from_file(name)
      end
    end

    def read_from_file(name)
      path = Rails.root.join(client_dist_path, prefix, name)
      Rails.logger.info "ReactOnRails - prerender file #{path}"
      IO.read(path)
    end

    # Request template from running Webpack DevServer
    def request_prerendered_template_from_devserver(name)
      Rails.logger.info "ReactOnRails - prerender from DevServer #{template_url(name)}"
      response = Net::HTTP.get_response(URI.parse(template_url(name)))
      response.body
    end

    def template_url(name)
      url = "http://localhost:#{webpack_devserver_port}"
      url += "/#{prefix}" unless prefix == "/"
      url += "/#{name}" unless name == "/"
      url
    end

    private

    def prefix
      ReactOnRails.configuration.asset_path_prefix
    end

    def webpack_devserver_port
      ReactOnRails.configuration.webpack_devserver_port
    end

    def client_dist_path
      ReactOnRails.configuration.client_dist_path
    end
  end
end
