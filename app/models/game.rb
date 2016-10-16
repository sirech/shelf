class Game < ActiveRecord::Base
  include Concerns::Item

  enum platform: %i(pc xbox360 iphone)
end
