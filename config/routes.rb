Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :albums, only: [:index, :show]
      resources :songs, only: [:show]
      resources :artists, only: [:show]
      resources :tracks, only: [:show]
    end
  end
  get '/cudi', to: 'homes#index'
  get '/mac', to: 'homes#index'
  get '*path', to: 'homes#index'
end
