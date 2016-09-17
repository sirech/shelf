require 'rails_helper'

describe Rest::BooksController, type: :controller do
  render_views

  describe '#years' do
    subject { get :years, format: :json }

    before do
      create(:book, year: 2011)
      create(:book, year: 2011)
      create(:book, year: 2010)
      create(:book, year: 2014)
      create(:book, year: 2015)
      create(:book, year: 2016)
    end

    it 'returns a sorted list of available years' do
      create(:book, year: 2011)
      subject
      expect(response).to be_ok
      expect(json_response!).to eq([2010, 2011, 2014, 2015, 2016])
    end
  end
end
