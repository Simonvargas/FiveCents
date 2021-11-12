Rails.application.routes.draw do

  root 'home#index'

    resources :businesses do
      resources :reviews do
    end
  end
  get '*path', to: 'home#index'
  # get 'reviews/index' to: 'home#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
