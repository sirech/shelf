module Rest
  class ItemsController < ApplicationController
    skip_before_filter :verify_authenticity_token, only: %i(create)

    def index
      scope = model_class.order(:title)
      scope = scope.where(year: params[:year].to_i) if params[:year]
      @items = scope.all
    end

    def create
      @item = model_class.new(item_params)
      valid = @item.save

      render_invalid_record(@item.errors) unless valid
    end

    def years
      @years = model_class.group(:year).count.sort
    end

    protected

    helper_method :model
    def model
      raise NotImplementedError
    end

    def extra_params
      []
    end

    helper_method :partial_path
    def partial_path
      "rest/#{model}s/#{model}"
    end

    private

    def item_params
      params.required(:item).permit([:title, :year, :description, :stars] + extra_params)
    end

    def model_class
      model.to_s.capitalize.constantize
    end
  end
end
