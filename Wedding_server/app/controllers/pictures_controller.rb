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

    def update
      picture = Picture.find(params[:id])
      if picture.update(picture_params)
        render json: picture
      end
    end

    def destroy
          picture = Picture.find(params[:id])
          picture.destroy
          render json: picture
    end
    
    private
    def picture_params
      params.require(:picture).permit(:img_title, :img_likes, :img_description, :img_url)
    end

    
end
