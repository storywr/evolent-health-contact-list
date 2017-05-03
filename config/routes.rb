Rails.application.routes.draw do
  namespace :api do
    post '/contacts/', to: 'contacts#update'
    resources :contacts, only: [:index, :update]
  end

end
