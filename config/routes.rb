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
  get '/:name', to: 'homes#index'
end
