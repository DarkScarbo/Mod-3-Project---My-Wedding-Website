class CreateGuests < ActiveRecord::Migration[5.2]
  def change
    create_table :guests do |t|
      t.string :guest_full_name
      t.string :guest_attending
      t.text :guest_message

      t.timestamps
    end
  end
end
