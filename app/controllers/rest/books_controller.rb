module Rest
  class BooksController < ApplicationController
    def index
      scope = Book.order(:title)
      scope = scope.where(year: params[:year].to_i) if params[:year]
      @books = scope.all
    end

    def years
      @years = Book.group(:year).count.keys.sort
    end
  end
end
