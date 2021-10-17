Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get "/me", to: "users#show"
  get "/users/:id", to: "users#routines"

  get "/Routine",to: "routines#routines"
  get "/Routine/:id", to: "routines#show"
  #add a update here so you can change the title value for the days


  get "/Workout/:id", to: "days#show"



  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
