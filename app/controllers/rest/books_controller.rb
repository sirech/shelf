module Rest
  class BooksController < ApplicationController
    def years
      @years = Book.group(:year).count.keys.sort
    end
  end
end
