class WorkoutSetsController < ApplicationController
    before_action :set_params, only: :create
    # before_action :set_update_params, only: :update
        def create
            set = WorkoutSet.create(set_params)
            if set
                render json: set,status: :created
            else
                render json: {error: set.errors.full_messages}, status: :unprocessable_entity
            end
        end
        
        def show
            set = WorkoutSet.find_by(:id => params[:id])
            if set
                render json: set
            else
                render json: {error: "Not authorized"}, status: :unauthorized
            end
        end
        
        def update 
            set = WorkoutSet.find_by(:id => params[:id])
            
            if set
                set.update(set_update_params)

                render json: set
            else
                render json: {error: "Not authorized"}, status: :unauthorized
            end
        end
    
        def destroy
            set = WorkoutSet.find_by(:id => params[:id])
            if set
                set.destroy
                head :no_content
            else
                render json: {error: error.full_messages }, status: :unauthorized
            end
        end

        private
        def set_params
            params.permit(:reps,:prior_weight,:now_weight ,:workout_id)
        end
        def set_update_params
            params.permit(:reps,:prior_weight,:now_weight)
        end
end
