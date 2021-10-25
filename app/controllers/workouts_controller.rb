class WorkoutsController < ApplicationController
    before_action :workout_params, only: :create
    def create
        workout = Workout.create(workout_params)
        workout.save(validate: false)
        if workout
            render json: workout,status: :created
        else
            render json: {error: workout.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def listWorkouts
        workout = Workout.all
        if workout
            render json: workout
        else
            render json: {error: 'No Workouts currently available'}, status: :not_found
        end
    end
    # def updateCurWorkouts
    #     params[:sets].each do |set|
    #         # code to update set
    #         # use set hash id to find existing sets
    #         set = Set.find(set[:id])
    #         set.update(set)
    #     end

    #     # workout = Workout.find_by(:id => params[:id])
    #     # if workout
    #     #     workout.update(workout_update_params)
    #     #     render json: workout,serializer: CurWorkoutsDataSerializer
    #     # else
    #     #     render json: {error: "Not authorized"}, status: :unauthorized
    #     # end
    # end
    def showCurWorkouts 
        workout = Workout.find_by(:id => params[:id])
        workout.save(validate: false)
        if workout
            render json: workout,serializer: CurWorkoutsDataSerializer
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def updateCardData
        workout = Workout.find_by(:id => params[:id])
        if workout.update(nested_workout_params)
            render json: workout,serializer: WorkoutDataSerializer
        else
            render json: {error: workout.errors.full_messages},status: :unprocessable_entity
        end
    end
    def getCardData
        workout = Workout.find_by(:id => params[:id])
        if workout
            render json: workout,serializer: WorkoutDataSerializer
        else
            render json: {error: workout.errors.full_messages},status: :unprocessable_entity
        end
    end
    def destroy
        workout = Workout.find_by(:id => params[:id])
        if workout
            workout.destroy
            head :no_content
        else
            render json: {error: error.full_messages }, status: :unauthorized
        end
    end
    private
    def workout_params
        params.permit(:name, :primary_muscle, :secondary_muscle_1,
            :secondary_muscle_2, :secondary_muscle_3, :secondary_muscle_4,:day_id)
    end
    # def workout_update_params
    #     params.permit(:prior_weight, :reps)
    # end
    def nested_workout_params
        params.require(:workout).permit(:name, :primary_muscle, 
        :secondary_muscle_1, :secondary_muscle_2, :secondary_muscle_3, 
        :secondary_muscle_4, sets_attributes: %i[id prior_weight now_weight reps _destroy])
    end
end
