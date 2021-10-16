class RoutinesController < ApplicationController
    before_action :routine_params, only: :create
    def create
        routine = Routine.create(routine_params)
        if routine
            render json: routine,status: :created
        else
            render json: {error: routine.errors.full_messages}, status: :unprocessable_entity
        end
    end
    # def routines 
    #     routine = Routine.all
    #     if routine
    #         render json: routine
    #     else
    #         render json: {error: "No Routine found"}, status: :not_found
    #     end
    # end
    def show 
        routine = Routine.find_by(:id => params[:id])
        if routine
            render json: routine,serializer: WeekSerializer
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end
    private
    def routine_params
        params.permit(:title, :user_id)
    end
end
