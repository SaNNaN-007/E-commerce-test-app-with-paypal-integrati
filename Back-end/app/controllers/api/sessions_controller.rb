class Api::SessionsController < ApplicationController

    def index 
        users = User.all
        render json: users
    end

    def login
        
        user = User.where(email: params[:email]).first

        if user && user.valid_password?(params[:password])

            render json: user
        else

            head(401)
        end
        
    end

end