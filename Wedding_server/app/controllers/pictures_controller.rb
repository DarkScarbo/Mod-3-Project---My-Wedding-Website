class PicturesController < ApplicationController
    def index
        pictures = Picture.all
        render json: pictures
    end

    def show
        picture = Picture.find_by(id: params[:id])
        if picture != nil
          render json: picture
        else
          render json: { error: "Picture not found." }, status: 404
        end
    end

    

end
