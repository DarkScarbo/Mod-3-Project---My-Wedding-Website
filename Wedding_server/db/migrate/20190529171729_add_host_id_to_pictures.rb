class AddHostIdToPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :host_id, :integer
  end
end
