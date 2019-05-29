class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :event_icon
      t.string :event_title
      t.text :event_description
      t.text :event_link_url

      t.timestamps
    end
  end
end
