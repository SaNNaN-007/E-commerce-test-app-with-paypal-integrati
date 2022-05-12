Rails.application.routes.draw do

 
  devise_for :users, skip: :all

  namespace :api do

    get 'products',to: 'products#index'
    get 'users', to: 'sessions#index'
    post 'login', to: 'sessions#login'

  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
