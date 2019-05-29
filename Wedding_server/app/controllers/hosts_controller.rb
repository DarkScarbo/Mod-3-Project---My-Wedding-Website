class HostsController < ApplicationController
    def index
        hosts = Host.all
        render json: hosts
    end

    def show
        host = Host.find_by(id: params[:id])
        if host != nil
          render json: host, include: :pictures, except: [:created_at, :updated_at]
        else
          render json: { error: "Host not found." }, status: 404
        end
    end

end
