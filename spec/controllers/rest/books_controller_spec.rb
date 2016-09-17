require 'rails_helper'

describe Rest::BooksController, type: :controller do
  render_views

  describe '#index' do
    subject { get :index, params: { format: :json } }

    before do
      create(:book, title: 'B - Book', year: 2015)
      create(:book, title: 'A - Book', year: 2014)
      create(:book, title: 'C - Book', year: 2015)
    end

    it 'returns properly' do
      subject
      expect(response).to be_ok
    end

    it 'returns a list' do
      subject
      expect(json_response!).to be_a(Array)
    end

    it 'returns all the books' do
      subject
      expect(json_response!.count).to eq(3)
    end

    it 'returns the fields of a book' do
      subject
      book = json_response!.first
      expect(book['title']).to eq('A - Book')
      expect(book['year']).to eq(2014)
    end

    it 'is sorted by title' do
      subject
      titles = json_response!.map { |book| book['title'] }
      expect(titles).to eq(titles.sort)
    end

    it 'can be filtered by year' do
      get :index, params: { format: :json, year: 2014 }
      expect(json_response!.count).to eq(1)
      expect(json_response!.first['year']).to eq(2014)
    end
  end

  describe '#years' do
    subject { get :years, params: { format: :json } }

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
