class AddWeddingIdToHosts < ActiveRecord::Migration[5.2]
  def change
    add_column :hosts, :wedding_id, :integer
  end
end
