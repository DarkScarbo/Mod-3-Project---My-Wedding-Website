class EventsController < ApplicationController
    def index
        events = Event.all
        render json: events
    end

    def show
        event = Event.find_by(id: params[:id])
        if event != nil
          render json: event, except: [:created_at, :updated_at]
        else
          render json: { error: "Event not found." }, status: 404
        end
    end
end
