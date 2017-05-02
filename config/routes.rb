Rails.application.routes.draw do
  namespace :api do
    resources :contacts, only: [:index, :create, :update]
  end

end
