module Prerender
  extend ActiveSupport::Concern

  def render_prerendered_template(name)
    content = ::ReactOnRails::TemplateHelper.prepare_template(name)
    logger.debug "ReactOnRails - template body: #{content}"
    render inline: content, layout: false
  end
end
