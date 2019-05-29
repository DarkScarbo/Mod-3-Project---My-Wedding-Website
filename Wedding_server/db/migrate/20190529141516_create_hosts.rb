class CreateHosts < ActiveRecord::Migration[5.2]
  def change
    create_table :hosts do |t|
      t.string :host_name
      t.string :host_img_url
      t.text :host_details
      t.text :host_hobbies
      t.text :host_phone_number
      t.string :host_email

      t.timestamps
    end
  end
end
