Rails.application.routes.draw do
  root 'teams#new'
  namespace :api do
    namespace :v1 do
      get '/teams' => 'teams#index'
      post '/teams' => 'teams#create'
    end
  end
end
