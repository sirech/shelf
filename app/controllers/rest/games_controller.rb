module Rest
  class GamesController < ItemsController
    protected

    def model
      :game
    end

    def extra_params
      %i(platform)
    end
  end
end
