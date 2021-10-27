Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get "/me", to: "users#show"
  get "/users/:id", to: "users#routines"

  post "/CreateRoutine", to:"routines#create"
  get "/Routine",to: "routines#routines"
  get "/Routine/:id", to: "routines#show"
  patch "/UpdateRoutine/:id", to: "routines#update"
  
  #add a update here so you can change the title value for the days
  post "/CreateDay", to: "days#create"
  get "/Workout/:id", to: "days#show"
  get "/GetDayData/:id", to: "days#getDayData"
  patch '/UpdateDayData/:id', to: "days#update"

  post "/CreateWorkout", to: "workouts#create"#
  get "/Cards/:id", to: "workouts#showCurWorkouts"
  get "/UpdateCard/:id", to: "workouts#updateCurWorkouts"
  get "/WorkoutList", to: "workouts#listWorkouts"#
  get "/GetCardData/:id", to: "workouts#getCardData"#
  patch "/UpdateCardData/:id", to: "workouts#updateCardData"#
  delete "/DeleteCardData/:id", to: "workouts#destroy"#
  

  post "/AddSet", to: "workout_sets#create"#
  get "/Sets/:id", to: "workout_sets#show"
  patch "/UpdateSet/:id", to: "workout_sets#update"
  delete "/DeleteSet/:id", to: "workout_sets#destroy"#
  
  
  




  post "/login", to: "sessions#create"
  patch "/addRoutine", to: "sessions#add_routine_id"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
