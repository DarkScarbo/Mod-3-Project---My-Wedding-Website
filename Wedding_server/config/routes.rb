Rails.application.routes.draw do
  get 'guest/event'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :pictures, only: [:index, :show, :edit, :update, :destroy]
  resources :hosts, only: [:index, :show]
  resources :weddings, only: [:index, :show]
  resources :guests, only: [:index, :show, :create, :new]
  resources :events, only: [:index, :show]
end
