require 'react_on_rails/version'
require 'react_on_rails/engine'
require 'react_on_rails/configuration'
require 'react_on_rails/template_helper'

module ReactOnRails
  def self.configure
    yield self.configuration
  end

  def self.configuration
    @@configuration ||= Configuration.new
  end

  def self.hot_reload_enabled?
    ENV['REACT_ON_RAILS_ENV'] == 'hot'
  end
end
