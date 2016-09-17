Rails.application.routes.draw do
  get '/' => 'clients#index'

  namespace 'rest' do
    resources :books, only: %i() do
      collection do
        get 'years'
      end
    end
  end
end
