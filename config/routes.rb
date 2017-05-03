Rails.application.routes.draw do
  namespace :api do
    post '/contacts/', to: 'contacts#create'
    patch '/contacts/', to: 'contacts#update'
    delete '/contacts/', to: 'contacts#destroy'
    resources :contacts, only: [:index, :update, :destroy]
  end

end
