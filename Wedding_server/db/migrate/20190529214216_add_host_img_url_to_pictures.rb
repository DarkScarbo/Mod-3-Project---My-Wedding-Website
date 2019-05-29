class AddHostImgUrlToPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :hosts, :host_img_url, :text
  end
end
