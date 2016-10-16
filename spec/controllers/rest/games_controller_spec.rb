require 'rails_helper'

describe Rest::GamesController, type: :controller do
  render_views

  it_behaves_like 'item controller', :game
end
