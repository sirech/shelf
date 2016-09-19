module Rest
  class BooksController < ApplicationController
    skip_before_filter :verify_authenticity_token, only: %i(create)

    def index
      scope = Book.order(:title)
      scope = scope.where(year: params[:year].to_i) if params[:year]
      @books = scope.all
    end

    def create
      @book = Book.new(book_params)
      valid = @book.save

      render_invalid_record(@book.errors) unless valid
    end

    def years
      @years = Book.group(:year).count.sort
    end

    private

    def book_params
      params.required(:book).permit(:title, :year, :description, :stars, :category)
    end
  end
end
