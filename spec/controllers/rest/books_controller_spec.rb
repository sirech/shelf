require 'rails_helper'

describe Rest::BooksController, type: :controller do
  render_views

  it_behaves_like 'item controller', :book
end
