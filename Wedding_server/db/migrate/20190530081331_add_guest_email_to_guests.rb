class AddGuestEmailToGuests < ActiveRecord::Migration[5.2]
  def change
    add_column :guests, :guest_email, :string
  end
end
