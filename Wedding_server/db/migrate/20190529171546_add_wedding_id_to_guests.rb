class AddWeddingIdToGuests < ActiveRecord::Migration[5.2]
  def change
    add_column :guests, :wedding_id, :integer
  end
end
