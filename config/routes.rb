Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :albums, only: [:index, :show]
      resources :songs, only: [:show]
      resources :artists, only: [:index, :show]
      resources :tracks, only: [:show]
    end
  end

  get '/', to: 'homes#index'
  get '/vote', to: 'homes#index'
  get '/mac', to: 'homes#index'
  get '/cudi', to: 'homes#index'
  get '/chance', to: 'homes#index'
  get '/travis', to: 'homes#index'
end
