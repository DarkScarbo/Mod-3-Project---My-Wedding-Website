class CreateWeddings < ActiveRecord::Migration[5.2]
  def change
    create_table :weddings do |t|
      t.integer :guest_id
      t.integer :host_id
      t.string :about_us
      t.string :date_location
      t.string :hosts_names
      t.string :hosts_address

      t.timestamps
    end
  end
end
