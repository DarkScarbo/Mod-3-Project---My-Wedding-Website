class WeddingsController < ApplicationController
    def index
        weddings = Wedding.all
        render json: weddings
    end

    def show
        wedding = Wedding.find_by(id: params[:id])
        if wedding != nil
          render json: wedding, include: [:hosts, :guests, :events], except: [:created_at, :updated_at]
        else
          render json: { error: "Wedding not found." }, status: 404
        end
    end
    
end
