class UsersController < ApplicationController
    before_action :user_params, only: :create
    before_action :find_user, only: [:show]

    def create
        user = User.create(user_params)
        if user.valid? 
          session[:user_id] = user.id
          render json: user, status: :created

        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    def routines
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "not found" }, status: :not_found
        end
    end
    def show 
        user =User.find_by(id: session[:user_id])
        if user
            render json: user,serializer: FirstSerializer
        else
            render json: { error: "not authorized" }, status: :unauthorized
        end
    end

    


    private
    

    def find_user
        user =User.find_by(id: session[:user_id])    
    end

    def user_params
        params.permit(:first_name,:last_name,:is_male,:age,:username, :password, :password_confirmation)
    end
end
