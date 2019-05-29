# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_29_214216) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string "event_icon"
    t.string "event_title"
    t.text "event_description"
    t.text "event_link_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "wedding_id"
  end

  create_table "guests", force: :cascade do |t|
    t.string "guest_full_name"
    t.string "guest_attending"
    t.text "guest_message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "wedding_id"
  end

  create_table "hosts", force: :cascade do |t|
    t.string "host_name"
    t.text "host_details"
    t.text "host_hobbies"
    t.text "host_phone_number"
    t.string "host_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "wedding_id"
    t.text "host_img_url"
  end

  create_table "pictures", force: :cascade do |t|
    t.string "img_title"
    t.integer "img_likes"
    t.string "img_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "host_id"
    t.text "img_url"
  end

  create_table "weddings", force: :cascade do |t|
    t.string "about_us"
    t.string "date_location"
    t.string "hosts_names"
    t.string "hosts_address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
