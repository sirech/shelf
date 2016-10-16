class Book < ApplicationRecord
  include Concerns::Item

  enum category: %i(sociology software econ history other)
end
