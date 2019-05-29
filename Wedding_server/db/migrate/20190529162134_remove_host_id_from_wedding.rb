class RemoveHostIdFromWedding < ActiveRecord::Migration[5.2]
  def change
    remove_column :weddings, :host_id, :string
  end
end
