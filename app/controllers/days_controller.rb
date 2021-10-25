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
            render json: day,serializer: DotwSerializer
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end
    def getDayData
        day = Day.find_by(:id => params[:id])
        if day
            render json: day,serializer: DayDataSerializer
        else
            render json: {error: day.errors.full_messages},status: :unprocessable_entity
        end
    end
    def update
        day = Day.find_by(:id => params[:id])
        if day.update(nest_day_params)
            render json: day
        else
            render json: {error: day.errors.full_messages},status: :unprocessable_entity
        end
    end

    private
    def day_params
        params.permit(:dotw, :title)
    end

    def nested_day_params
        params.require(:day).permit(:id, :dotw, :title, :routine_id, 
        workouts_attributes: [:id, :name, :day_id, :primary_muscle, 
        :secondary_muscle_1,:secondary_muscle_2, :secondary_muscle_3,
        :secondary_muscle_4, sets_attributes: %i[id prior_weight reps]])
    end
end
