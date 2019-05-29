class RemoveGuestIdFromWedding < ActiveRecord::Migration[5.2]
  def change
    remove_column :weddings, :guest_id, :string
  end
end
