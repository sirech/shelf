module Rest
  class BooksController < ItemsController
    protected

    def model
      :book
    end

    def extra_params
      %i(category)
    end
  end
end
