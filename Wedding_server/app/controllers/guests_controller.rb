class GuestsController < ApplicationController
    def index
        guests = Guest.all
        render json: guests
    end

    def show
        guest = Guest.find_by(id: params[:id])
        if guest != nil
          render json: guest, except: [:created_at, :updated_at]
        else
          render json: { error: "Guest not found." }, status: 404
        end
    end

    def create
        guest = Guest.new(wedding_id: params[:wedding_id], guest_full_name: params[:guest_full_name], guest_attending: params[:guest_attending], guest_message: params[guest_message])
        if guest.save
          render json: guest
        else
          render json: {error: "Unable to create Guest."}, status: 400
        end
      end

end
