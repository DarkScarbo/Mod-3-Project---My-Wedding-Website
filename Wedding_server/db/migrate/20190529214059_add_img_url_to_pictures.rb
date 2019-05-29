class AddImgUrlToPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :img_url, :text
  end
end
