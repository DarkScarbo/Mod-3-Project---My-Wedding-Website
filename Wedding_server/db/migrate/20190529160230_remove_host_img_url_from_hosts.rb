class RemoveHostImgUrlFromHosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :hosts, :host_img_url, :string
  end
end
