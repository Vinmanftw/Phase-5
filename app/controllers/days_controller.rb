class DaysController < ApplicationController
    before_action :day_params, only: :create
    def create
        day = Day.create(day_params)
        if day
            render json: day,status: :created
        else
            render json: {error: day.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def show 
        day = Day.find_by(:id => params[:id])
        if day
            render json: day,serializer: 
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end
    private
    def day_params
        params.permit(:title, :user_id)
    end
end
