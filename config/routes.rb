Rails.application.routes.draw do
  get '/' => 'clients#index'

  namespace 'rest' do
    resources :books, only: %i(index create) do
      collection do
        get 'years'
      end
    end
  end

  get '/*react', to: 'clients#index'
end
