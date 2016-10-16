module Concerns
  module Item
    extend ActiveSupport::Concern

    included do
      validates :title, presence: true, length: { in: 5..200 }
      validates :description, length: { maximum: 500 }
      validates_numericality_of :year, greater_than_or_equal_to: 2000
      validates :stars, inclusion: { in: 1..5 }
    end
  end
end
