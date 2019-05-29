class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.string :img_url
      t.string :img_title
      t.integer :img_likes
      t.string :img_description

      t.timestamps
    end
  end
end
