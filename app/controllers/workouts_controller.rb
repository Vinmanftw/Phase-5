class WorkoutsController < ApplicationController
    before_action :workout_params, only: :create
    def create
        workout = Workout.create(workout_params)
        if workout
            render json: workout,status: :created
        else
            render json: {error: workout.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def listWorkouts

    end
    def showCurWorkouts 
        workout = Workout.find_by(:id => params[:id])
        if workout
            render json: workout,serializer: CurWorkoutsDataSerializer
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end
    private
    def workout_params
        params.permit(:name, :primary_muscle, :secondary_muscle_1,:secondary_muscle_2, :secondary_muscle_3, :secondary_muscle_4)
    end
    
end
