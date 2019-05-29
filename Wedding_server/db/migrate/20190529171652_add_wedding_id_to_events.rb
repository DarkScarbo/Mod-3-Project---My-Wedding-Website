class AddWeddingIdToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :wedding_id, :integer
  end
end
